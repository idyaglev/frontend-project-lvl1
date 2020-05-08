import runGame from '../index.js';
import generateNum from '../utils.js';

const gcd = (x, y) => {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
};

const generateQandA = () => {
  const randomNum1 = generateNum(1, 100);
  const randomNum2 = generateNum(1, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = gcd(randomNum1, randomNum2);
  const result = [question, correctAnswer.toString()];
  return result;
};

const rule = 'Find the greatest common divisor of given numbers.';

export default () => runGame(rule, generateQandA);
