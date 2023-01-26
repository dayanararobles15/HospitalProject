import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolum.interface';



@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {

  dataMedics:any[] = [
    {id:1, name:'Luis', cmp:'11'},
    {id:2, name:'Carla', cmp:'12'},
    {id:3, name:'Fernanda', cmp:'13'},
    {id:4, name:'Pablo', cmp:'21'},
    {id:5, name:'Jorge', cmp:'50'},
  ]

  metaDataColumns:MetaDataColumn[] = [
    {field: 'id', title:'ID'},
    {field: 'name', title:'MEDICO'},
    {field: 'cmp', title:'CODIGO DE REGISTRO'},
  ]

  listFieldsMedics:string[] = ['id','name','cmp']
}
