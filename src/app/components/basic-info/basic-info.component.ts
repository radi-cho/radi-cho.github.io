import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  constructor() {}
  title: Array<string> = ['Who am I?'];

  ngOnInit() {}
}