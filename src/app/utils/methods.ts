import { greetings } from './constants';
import { Greeting } from '../utils/types';

export const getGreeting = (index: number): Greeting => {
  let greeting: string = `${greetings[index]}, I'm Radi!`;
  return { title: greeting, index: index };
};
