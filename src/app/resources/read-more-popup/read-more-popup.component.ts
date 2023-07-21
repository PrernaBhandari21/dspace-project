import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-read-more-popup',
  templateUrl: './read-more-popup.component.html',
  styleUrls: ['./read-more-popup.component.css']
})
export class ReadMorePopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  
  ngOnInit(): void {
    console.log("Data : ",this.data);
  }


}
