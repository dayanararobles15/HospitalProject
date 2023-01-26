import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() leght!:any
  @Output() onNextPage:EventEmitter<number[]>=new EventEmitter<number[]>()


  constructor() { }

  ngOnInit(): void {

  }

 onChangePage ( pe : PageEvent ) { 
   this.onNextPage.emit([pe.pageIndex,pe.pageSize])

  }
}