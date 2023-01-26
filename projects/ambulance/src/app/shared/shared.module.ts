import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './components/container/container.component';
import { TittleComponent } from './components/tittle/tittle.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './components/table/table.component'; 
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import { KeypadComponent } from './components/keypad/keypad.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import { DownloadComponent } from './components/download/download.component'
import {MatListModule} from '@angular/material/list'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 

import {MatInputModule} from '@angular/material/input'; 
import { ReactiveFormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX:true
}
@NgModule({
  declarations: [
    TittleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    KeypadComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
   
    MatListModule
  ],
  exports: [
    TittleComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule,
    MatPaginatorModule,
    PaginatorComponent,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    KeypadComponent,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
