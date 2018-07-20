import { greetings } from './constants';
import { Greeting } from '../utils/interfaces';

export const getGreeting = (index: number, name: string): Greeting => {
  let greeting: string = `${greetings[index]}, I'm ${name}!`;
  return { title: greeting, index: index };
};
