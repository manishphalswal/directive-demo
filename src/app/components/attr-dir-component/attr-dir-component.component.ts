import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-dir-component',
  templateUrl: './attr-dir-component.component.html',
  styleUrls: ['./attr-dir-component.component.scss']
})
export class AttrDirComponentComponent implements OnInit {

  toggleTextColor: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
