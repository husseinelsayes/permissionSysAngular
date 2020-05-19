import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IconModalComponent } from 'src/app/shared/icon-modal/icon-modal.component';
import { PermissionService } from 'src/app/services/permission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-system',
  templateUrl: './add-system.component.html',
  styleUrls: ['./add-system.component.scss']
})
export class AddSystemComponent implements OnInit {

  moduleInfo: FormGroup;
  selectedIcon;

  constructor(private fb: FormBuilder, private _modal : MatDialog, private _permissionService : PermissionService, private _router : Router) { 
      this.moduleInfo = this.fb.group({
        moduleNameAr : ['module name in arabic'],
        moduleNameEn : ['module name in english'],
        moduleIcon : [null],
        moduleLink : ['linkk']
      })
    }

  ngOnInit() {
    console.log(this.moduleInfo.get('moduleIcon').value);
  }

  openModal(){
    const dialogRef = this._modal.open(IconModalComponent,{
      maxHeight: '600px',
      maxWidth: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.moduleInfo.get('moduleIcon').setValue(result.selectedIcon);
    })
  }

  submit(){
    console.log(this.moduleInfo.value);
    this._permissionService.addModule(this.moduleInfo.value).subscribe(result => {
      console.log(result);
      this._router.navigate(['/modules']);
    },error => {
      console.log(error);
    })
  }
}
