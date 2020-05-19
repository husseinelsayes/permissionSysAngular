import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IconModalComponent } from 'src/app/shared/icon-modal/icon-modal.component';
import { PermissionService } from 'src/app/services/permission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/models/module';


@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.scss']
})
export class UpdateModuleComponent implements OnInit {

  moduleInfo: FormGroup;
  selectedIcon;
  id;
  module:Module;
  constructor(private _route : ActivatedRoute, private fb: FormBuilder, private _modal : MatDialog, private _permissionService : PermissionService, private _router : Router) { 
      
    }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._permissionService.findModuleById(this._route.snapshot.paramMap.get('id')).subscribe(result=>{
      this.module = <Module>result;
      this.moduleInfo = this.fb.group({
        moduleNameAr : [this.module.moduleInfo.moduleNameAr],
        moduleNameEn : [this.module.moduleInfo.moduleNameEn],
        moduleIcon : [this.module.moduleInfo.moduleIcon],
        moduleLink : [this.module.moduleInfo.moduleLink]
      })
    });

    
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
    this._permissionService.updateModule(this.id,this.moduleInfo.value).subscribe(result => {
      console.log(result);
      this._router.navigate(['/modules']);
    },error => {
      console.log(error);
    })
  }

}
