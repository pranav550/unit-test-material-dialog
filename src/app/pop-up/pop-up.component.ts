import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  firstname;
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.firstname=data.name
   }

  ngOnInit(): void {
  }

}
