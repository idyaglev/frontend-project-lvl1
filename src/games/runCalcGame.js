import gameStart from '../index.js';
import generateNum from '../utils.js';

const calculateAnswer = (randomNum1, randomNum2, randomOperator) => {
  let result;
  switch (randomOperator) {
    case '+':
      result = randomNum1 + randomNum2;
      break;
    case '-':
      result = randomNum1 - randomNum2;
      break;
    case '*':
      result = randomNum1 * randomNum2;
      break;
    default:
      console.log('ALARM, PROGRAM WAS CRACKED! ;(');
  }
  return result;
};

const generateQandA = () => {
  const randomNum1 = generateNum(1, 100);
  const randomNum2 = generateNum(1, 100);
  const operators = ['+', '-', '*'];
  const operatorIndex = generateNum(0, operators.length - 1);
  const randomOperator = operators[operatorIndex];
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const correctAnswer = calculateAnswer(randomNum1, randomNum2, randomOperator);
  const result = [question, correctAnswer.toString()];
  return result;
};

const rule = 'What is the result of the expression?';

export default () => gameStart(rule, generateQandA);
