import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private _http:HttpClient) { }

  apiUrl = "/api";
  //get all modules
  findAllModules(){
    console.log('from permission servie --- findAllModules()');
    return this._http.get(this.apiUrl+ '/modules/');
  }

  //get module
  findModuleById(id){
    console.log('from permission servie --- findModuleById()');
    return this._http.get(this.apiUrl+ '/modules/' + id);
  }

  //add module
  addModule(moduleInfo){
    console.log('from permission servie --- addModule()');
    return this._http.post(this.apiUrl+ '/modules/',moduleInfo);
  }
  
  //update module
  updateModule(id,moduleInfo){
    console.log('from permission servie --- updateModule()');
    return this._http.put(this.apiUrl+ '/modules/'+id,moduleInfo);
  }

  //delete module
  deleteModule(){
    console.log('from permission servie --- deleteModule()');
  }

  //add a module to user
  addModuleToUser(permission){
    console.log('from permission servie --- addModuleToUser() ');
    return this._http.post(this.apiUrl+ '/permissions/grant/',permission);
  }
  
  //remove a module from user
  removeModuleFromUser(permission){
    console.log('from permission servie --- removeModuleFromUser()');
    return this._http.post(this.apiUrl+ '/permissions/remove/',permission);
  }

  //get user modules
  getUserModules(userId){
    console.log('from permission servie --- getUserModules user(' + userId+')');
    return this._http.get(this.apiUrl+ '/permissions/'+userId);
  }

}
