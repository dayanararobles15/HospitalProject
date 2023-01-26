import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolum.interface';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  dataHistories:any[] = [
    {id:1, patient:'Luis', medic:'Juan'},
    {id:2, patient:'Carla', medic:'Pedro'},
    {id:3, patient:'Fernanda', medic:'Ana'},
    {id:4, patient:'Pablo', medic:'Luisa'},
    {id:5, patient:'Jorge', medic:'Carlos'},
  ]
  metaDataColumns:MetaDataColumn[] = [
    {field: 'id', title:'ID'},
    {field: 'patient', title:'PACIENTE'},
    {field: 'medic', title:'MEDICO'},
  ]
  listFieldsHistories:string[] = ['patient','medic']
  constructor() { }

  ngOnInit(): void {
  }

}
