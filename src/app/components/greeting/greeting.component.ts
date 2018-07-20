import { Component, OnInit } from '@angular/core';

// Import greetings data
import { greetings, fullName, shorFirstName } from '../../utils/constants';
// greetings - array with multiple greetings
import { getGreeting } from '../../utils/methods';
// getGreeting - method which returns one of many greetings
import { Greeting } from '../../utils/types';
// Greeting - interface which contains the data (title & index) types of a greeting

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  constructor() {}
  greeting: Greeting = getGreeting(0, shorFirstName);
  name: string = fullName;
  containerOpacity: number = 0;
  textOpacity: number = 1;
  triangleBottomPosition: number = 100;

  updateGreeting = () => {
    this.textOpacity = 0;
    const index = (this.greeting.index + 1) % greetings.length;
    const newGreeting: Greeting = getGreeting(index, shorFirstName);
    setTimeout(() => {
      this.greeting = newGreeting;
      this.textOpacity = 1;
    }, 520);
  };

  scroll(el: any): void {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnInit() {
    setInterval(this.updateGreeting, 2100);
    setInterval(() => {
      this.triangleBottomPosition = this.triangleBottomPosition === 100 ? 110 : 100;
    }, 1000);
    setTimeout(() => {
      this.containerOpacity = 1;
    }, 100);
  }
}
