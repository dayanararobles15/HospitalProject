import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from '../../../services/utils.service';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolum.interface';
import { FormComponent } from '../../components/form/form.component';
import { UserModel } from '../../models/user.model';
import { CrudUserService } from '../../services/crud-user.service';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
   // dataUsers:any[] = [
  //   {id:1, name:'Luis', area:'Contabilidad'},
  //   {id:2, name:'Carla', area:'RRHH'},
  //   {id:3, name:'Fernanda', area:'Asistencia Social'},
  //   {id:4, name:'Luis', area:'Contabilidad'},
  //   {id:5, name:'Carla', area:'RRHH'},
  //   {id:6, name:'Fernanda', area:'Asistencia Social'},
  //   {id:7, name:'Luis', area:'Contabilidad'},
  //   {id:8, name:'Carla', area:'RRHH'},
  //   {id:9, name:'Fernanda', area:'Asistencia Social'},
  //   {id:10, name:'Luis', area:'Contabilidad'},
  //   {id:11, name:'Carla', area:'RRHH'},
  //   {id:12, name:'Fernanda', area:'Asistencia Social'},
  //   {id:13, name:'Luis', area:'Contabilidad'},
  //   {id:14, name:'Carla', area:'RRHH'},
  //   {id:15, name:'Fernanda', area:'Asistencia Social'},
  //   {id:16, name:'Luis', area:'Contabilidad'},
  //   {id:17, name:'Carla', area:'RRHH'},
  //   {id:18, name:'Fernanda', area:'Asistencia Social'},
  //   {id:19, name:'Luis', area:'Contabilidad'},
  //   {id:20, name:'Carla', area:'RRHH'},
  //   {id:21, name:'Fernanda', area:'Asistencia Social'},
  //   {id:22, name:'Luis', area:'Contabilidad'},
  //   {id:23, name:'Carla', area:'RRHH'},
  //   {id:24, name:'Fernanda', area:'Asistencia Social'},
  //   {id:25, name:'Luis', area:'Contabilidad'},
  //   {id:26, name:'Carla', area:'RRHH'},
  //   {id:27, name:'Fernanda', area:'Asistencia Social'},
  //   {id:28, name:'Luis', area:'Contabilidad'},
  //   {id:29, name:'Carla', area:'RRHH'},
  //   {id:30, name:'Fernanda', area:'Asistencia Social'},
  //   {id:31, name:'Luis', area:'Contabilidad'},
  //   {id:32, name:'Carla', area:'RRHH'},
  //   {id:33, name:'Fernanda', area:'Asistencia Social'},
  //   {id:34, name:'Luis', area:'Contabilidad'},
  //   {id:35, name:'Carla', area:'RRHH'},

  // ]

  dataUsers:UserModel[] = []

  listFieldsUsers:string[] = ['id','name','area']
  metaDataColumns:MetaDataColumn[] = [
    {field: '_id', title:'ID'},
    {field: 'username', title:'USUARIO'},
    {field: 'profile', title:'PERFIL'},
    {field: 'active', title:'ACTIVO'},
  ]

  keypadButtons: KeyPadButton[] = [
    {
      icon: "cloud_download",
      tooltip: "DESCARGAR",
      color:"accent",
      action:"DOWNLOAD"
    },
    {
      icon: "add",
      tooltip: "AGREGAR",
      color:"primary",
      action:"NEW"
    }
  ]



  data!:any[]
  ngOnInit(): void {
  this.data=this.dataUsers.slice(0,10)
  }

  changePage(page:number){
    this.crudUser.getUsers().subscribe( response => {
      this.dataUsers = response
    })
  }




  number!:number[]
  size=0
  index=0
  files=0
  nextPage(number:number[]){
    this.size=number[1]
    this.index=number[0]
    this.files=this.size*this.index
    this.data=this.dataUsers.slice(this.files,this.files+this.size)

  }

 
  leght=this.dataUsers.length

  constructor(private utilsService:UtilsService, private crudUser:CrudUserService) { 
    this.changePage(0)
  }



  //botones
  openForm(row:any = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose:true.valueOf,
      data:row
    }
    const reference:MatDialogRef<FormComponent> = this.utilsService.showFormModal(FormComponent,options)

    reference.afterClosed().subscribe((response) => {
      if(!response){
        return
      }

      if(response._id){
        //api actualizar          
      }
      else{
        //api registrar
        this.crudUser.addUser(response).subscribe(() => {
          this.changePage(0)
        })
      }
    })
  }

  delete(row:any) {
    
  }

  doAction(action:string){
    switch (action) {
      case 'DOWNLOAD':
        this.utilsService.showBottomSheet()
        break
      case 'NEW':
        this.openForm()
        break
    }
  }

}
