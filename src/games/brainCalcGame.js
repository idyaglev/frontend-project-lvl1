import randomIntNum from '../utils.js';
import gameFlow from '../index.js'; 

const QandAGenerator = () => {
  const randomNum1 = randomIntNum(1, 100);
  const randomNum2 = randomIntNum(1, 100);
  const operatorOption = ['+', '-', '*'];
  const randomOperator = operatorOption[randomIntNum(0, 2)];
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const result = [];
  let correctAnswer = Number;
  if (randomOperator === '+') {
    correctAnswer = randomNum1 + randomNum2;
  }
  if (randomOperator === '-') {
    correctAnswer = randomNum1 - randomNum2;
  }
  if (randomOperator === '*') {
    correctAnswer = randomNum1 * randomNum2;
  }
  result.push(question, correctAnswer.toString());
  return result;
};

const brainCalcGame = () => {
  const rule = 'What is the result of the expression?';
  gameFlow(rule, QandAGenerator);
};

export default brainCalcGame;
