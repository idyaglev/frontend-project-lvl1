import randomIntNum from '../utils.js';
import gameFlow from '../index.js';

const gcd = (x, y) => {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
};

const QandAGenerator = () => {
  const randomNum1 = randomIntNum(1, 100);
  const randomNum2 = randomIntNum(1, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = gcd(randomNum1, randomNum2);
  const result = [];
  result.push(question, correctAnswer.toString());
  return result;
};

const brainGcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  gameFlow(rule, QandAGenerator);
};

export default brainGcdGame;
