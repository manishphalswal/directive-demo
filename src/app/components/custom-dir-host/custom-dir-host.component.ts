import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dir-host',
  templateUrl: './custom-dir-host.component.html',
  styleUrls: ['./custom-dir-host.component.scss']
})
export class CustomDirHostComponent implements OnInit {

  age: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
