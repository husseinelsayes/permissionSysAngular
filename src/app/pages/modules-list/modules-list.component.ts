import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss']
})
export class ModulesListComponent implements OnInit {

  constructor(private _permissionService : PermissionService) {
   }

  modules;

  ngOnInit(): void {
    this._permissionService.findAllModules().subscribe(result => {
      console.log(result);
      this.modules = result;
    })
  }

}
