import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';


import {MatSidenavModule} from '@angular/material'; 


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports:[
    MatSidenavModule
  ]
})
export class SidebarModule { }
