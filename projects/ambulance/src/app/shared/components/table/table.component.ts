import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/metadatacolum.interface';

interface IData{
  id:number
  name:string
}

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() data:any
//@Input() listFields!:string[]
@Input() metaDataColumns!:MetaDataColumn[]

@ContentChildren(MatColumnDef, {descendants:true})
ColumnsDef!: QueryList<MatColumnDef>
@ViewChild(MatTable, {static:true}) table!: MatTable<any>



 // data:IData[] = [
  //   {id:1, name:'Luis'},
  //   {id:2, name:'Carla'},
  //   {id:3, name:'Fernanda'},
  //   {id:4, name:'Pablo'},
  //   {id:5, name:'Jorge'},
  // ]

  // listFields:string[] = ['id','name']

  constructor() { }
  listFields:string[] = []
  
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes['metaDataColumns'])
    {
      this.listFields = this.metaDataColumns.map((x) => x.field)
    }
  }

  ngAfterContentInit(){
    if(!this.ColumnsDef){
      return
    }
    this.ColumnsDef.forEach((columnDef) => {
      this.listFields.push(columnDef.name)
      this.table.addColumnDef(columnDef)
    })
  }



}
