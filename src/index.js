import readlineSync from 'readline-sync';
import brainEvenGame from './games/brainEvenGame.js';

const greetingsFunction = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const brainEvenGameStart = () => {
  const userName = greetingsFunction();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  brainEvenGame(userName);
};

export { greetingsFunction, brainEvenGameStart };
