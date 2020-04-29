import randomIntNum from '../utils.js';
import gameFlow from '../index.js';

const isPrime = (num) => {
  const primeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  let result = Boolean;
  if (primeNum.includes(num)) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const QandAGenerator = () => {
  const randomNum = randomIntNum(0, 100);
  const question = randomNum;
  let correctAnswer = '';
  if (isPrime(randomNum)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const result = [];
  result.push(question, correctAnswer);
  return result;
};

const brainPrimeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameFlow(rule, QandAGenerator);
};

export default brainPrimeGame;
