import { PopUpComponent } from './pop-up/pop-up.component';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modaltesting';
  constructor(private dialogRef:MatDialog){}

  openDialog(){
    this.dialogRef.open(PopUpComponent, {
      data:{
        name:'Sameul'
      }
    })
  }
}
