import gcd from '../supportive/gcd.js';

const brainGcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const randomNum1 = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = gcd(randomNum1, randomNum2);
  const result = [rule, question, correctAnswer];
  return result;
};

export default brainGcdGame;
