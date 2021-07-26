import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-dir-component',
  templateUrl: './str-dir-component.component.html',
  styleUrls: ['./str-dir-component.component.scss']
})
export class StrDirComponentComponent implements OnInit {

  messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
    "Message 5"
  ];

  toggleVisibility: boolean = true;

  alertType?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
