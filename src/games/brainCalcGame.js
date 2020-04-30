import generateNum from '../utils.js';
import gameStart from '../index.js';

const calculateAnswer = (randomNum1, randomNum2, randomOperator) => {
  let result = 0;
  if (randomOperator === '+') {
    result = randomNum1 + randomNum2;
  }
  if (randomOperator === '-') {
    result = randomNum1 - randomNum2;
  }
  if (randomOperator === '*') {
    result = randomNum1 * randomNum2;
  }
  return result;
};

const generateQandA = () => {
  const randomNum1 = generateNum(1, 100);
  const randomNum2 = generateNum(1, 100);
  const operatorsOption = ['+', '-', '*'];
  const operatorIndex = generateNum(0, 2);
  const randomOperator = operatorsOption[operatorIndex];
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const result = [];
  const correctAnswer = calculateAnswer(randomNum1, randomNum2, randomOperator);
  result.push(question, correctAnswer.toString());
  return result;
};

const rule = 'What is the result of the expression?';

export default () => {
  gameStart(rule, generateQandA);
};
