import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import {MatTableModule} from '@angular/material/table';
import { MedicsdRoutingModule } from './medics-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MedicsdRoutingModule,
    SharedModule
  ],
  exports: [
    PageListComponent
  ],
})
export class MedicsModule { }
