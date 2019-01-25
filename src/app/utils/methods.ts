import { greetings } from './constants';
import { Greeting, Age } from '../utils/interfaces';

export const getGreeting = (index: number, name: string): Greeting => {
  let greeting: string = `${greetings[index]}, I am ${name}!`;
  return { title: greeting, index: index };
};

const year: number = 1000 * 60 * 60 * 24 * 365.25;
const second: number = 1000;
export const getAge = (birth: Date, measureDate?: Date): Age => {
  measureDate = measureDate || new Date();
  let result: Age = { years: 1, seconds: 0 };
  let diff: number = measureDate.getTime() - birth.getTime();
  result.years = Math.floor(diff / year);
  result.seconds = Math.floor((diff - result.years * year) / second);
  return result;
};
