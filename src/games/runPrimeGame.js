import runGame from '../index.js';
import generateNum from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const generateQandA = () => {
  const question = generateNum(0, 10);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const result = [question, correctAnswer];
  return result;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(rule, generateQandA);
