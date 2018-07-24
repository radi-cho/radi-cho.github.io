import { greetings } from './constants';
import { Greeting, Age } from '../utils/interfaces';

export const getGreeting = (index: number, name: string): Greeting => {
  let greeting: string = `${greetings[index]}, I'm ${name}!`;
  return { title: greeting, index: index };
};

const year: number = 1000 * 60 * 60 * 24 * 365.25;
const month: number = 1000 * 60 * 60 * 24 * 30.4375;
export const getAge = (birth: Date, measuteDate?: Date): Age => {
  measuteDate = measuteDate || new Date();
  let result: Age = { years: 1, months: 0 };
  let diff: number = measuteDate.getTime() - birth.getTime();
  result.years = Math.floor(diff / year);
  result.months = Math.floor((diff - result.years * year) / month);
  return result;
};
