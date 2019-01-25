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
  place: object = livingPlace;
  age: object = getAge(birthDay);

  constructor() {
    setInterval(this.updateAge, 1000);
  }

  updateAge = () => {
    this.age = getAge(birthDay);
  };

  socialLink = social => window.open(socials[social], '_blank');
  ngOnInit() {}
}
