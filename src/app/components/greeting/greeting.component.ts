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

  updateGreeting = () => {
    const index = (this.greeting.index + 1) % greetings.length;
    const newGreeting: Greeting = getGreeting(index, shorFirstName);
    this.greeting = newGreeting;
  };

  ngOnInit() {
    setInterval(this.updateGreeting, 1500);
  }
}
