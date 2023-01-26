import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    SharedModule
  ]
})
export class DriversModule { }
