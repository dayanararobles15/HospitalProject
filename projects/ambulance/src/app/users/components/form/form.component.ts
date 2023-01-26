import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  title:string
  group!: FormGroup
  
  constructor(private reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      this.title = data ? 'EDICIÓN' : 'NUEVO'
    }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm(){
    this.group = new FormGroup({
      username: new FormControl(this.data?.username, Validators.required),
      profile: new FormControl(this.data?.profile, Validators.required),
      active: new FormControl(this.data?.active, Validators.required),
    })

    if(this.data) {
      this.group.addControl('password', new FormControl(''))
    }
    else {
      this.group.addControl('password', new FormControl('', Validators.required))
    }
  }

  save() {
    const record = this.group.value
    this.reference.close(record)
  }

}
