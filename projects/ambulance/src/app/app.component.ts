import { Component } from '@angular/core';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ambulance';
  expanded=true

  toggleExpanded(expanded:boolean){
    this.expanded = expanded
  }
}
