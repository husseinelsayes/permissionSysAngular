import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarDirective } from 'src/directives/sidebar.directive';
import { NavigationService } from 'src/services/navigation.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AddSystemComponent } from './pages/add-system/add-system.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'; 
import { IconModalComponent } from './shared/icon-modal/icon-modal.component';
import { AddPermissionComponent } from './pages/add-permission/add-permission.component';
import { ModulesListComponent } from './pages/modules-list/modules-list.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateModuleComponent } from './pages/update-module/update-module.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarDirective,
    AddSystemComponent,
    IconModalComponent,
    AddPermissionComponent,
    ModulesListComponent,
    UpdateModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
    ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
