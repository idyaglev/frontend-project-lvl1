import generateNum from '../utils.js';
import gameStart from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  } if (num === 2) {
    return 'yes';
  }

  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return 'no';
    }
    i += 1;
  }

  return 'yes';
};

const generateQandA = () => {
  const randomNum = generateNum(0, 10);
  const question = randomNum;
  const correctAnswer = isPrime(randomNum);
  const result = [question, correctAnswer];
  return result;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  gameStart(rule, generateQandA);
};
