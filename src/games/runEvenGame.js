import generateNum from '../utils.js';
import runGame from '../index.js';

const isEven = (num) => {
  const result = (num % 2 === 0);
  return result;
};

const generateQandA = () => {
  const question = generateNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const result = [question, correctAnswer];
  return result;
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => runGame(rule, generateQandA);
