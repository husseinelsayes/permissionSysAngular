import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSystemComponent } from './pages/add-system/add-system.component';
import { AddPermissionComponent } from './pages/add-permission/add-permission.component';
import { ModulesListComponent } from './pages/modules-list/modules-list.component';
import { UpdateModuleComponent } from './pages/update-module/update-module.component';


const routes: Routes = [
  {path : 'add-system' , component : AddSystemComponent},
  {path : 'add-permission' , component : AddPermissionComponent},
  {path : 'modules' , component : ModulesListComponent},
  {path : 'update-module/:id' , component : UpdateModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
