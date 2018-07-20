import { Component, OnInit } from '@angular/core';
import { SiteFeatures } from '../../utils/classes';

// Import greetings data
import { greetings, fullName, shorFirstName } from '../../utils/constants';
// greetings - array with multiple greetings
import { getGreeting } from '../../utils/methods';
// getGreeting - method which returns one of many greetings
import { Greeting } from '../../utils/interfaces';
// Greeting - interface which contains the data (title & index) types of a greeting

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent extends SiteFeatures implements OnInit {
  constructor() {
    super();
  }

  greeting: Greeting = getGreeting(0, shorFirstName);
  name: string = fullName;
  containerOpacity: number = 0;
  textOpacity: number = 1;
  triangleBottomPosition: number = 15;

  updateGreeting = () => {
    this.textOpacity = 0;
    const index = (this.greeting.index + 1) % greetings.length;
    const newGreeting: Greeting = getGreeting(index, shorFirstName);
    setTimeout(() => {
      this.greeting = newGreeting;
      this.textOpacity = 1;
    }, 520);
  };

  ngOnInit() {
    setInterval(this.updateGreeting, 2100);
    setInterval(() => {
      this.triangleBottomPosition = this.triangleBottomPosition === 15 ? 16 : 15;
    }, 1000);
    setTimeout(() => {
      this.containerOpacity = 1;
    }, 100);
  }
}
