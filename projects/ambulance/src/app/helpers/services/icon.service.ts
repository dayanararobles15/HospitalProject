import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface IIcon{
  name: string
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private listIcons:IIcon[] = [
    {name:'medico', path: '../assets/icons/medico.svg'},
    {name:'historia', path: '../assets/icons/historia.svg'},
    {name:'piloto', path: '../assets/icons/conductor.svg'},
    {name:'usuario', path: '../assets/icons/programador.svg'},
    {name:'tablero', path: '../assets/icons/tablero.svg'},
  ]
  constructor(private matIconRegistr: MatIconRegistry,
    private domSanitizer:DomSanitizer){
      this.registryIcons()
    }

    registryIcons(){
      this.listIcons.forEach((icon) => {
        this.matIconRegistr.addSvgIcon(
          icon.name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
        )
      })
    }
  
}
