import gameStart from '../index.js';
import generateNum from '../utils.js';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const generateQandA = () => {
  const question = generateNum(1, 100);
  const correctAnswer = isEven(question);
  const result = [question, correctAnswer];
  return result;
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  gameStart(rule, generateQandA);
};
