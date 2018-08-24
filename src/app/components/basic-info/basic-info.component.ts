import { Component, OnInit } from '@angular/core';
import { fullName, livingPlace, birthDay, socials } from '../../utils/constants';
import { getAge } from '../../utils/methods';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  name: string = fullName;
  place: string = livingPlace;
  age: object = getAge(birthDay);

  constructor() {}

  ngOnInit() {}

  socialLink(social) {
  }
}
