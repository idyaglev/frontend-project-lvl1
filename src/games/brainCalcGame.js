import randomIntNum from '../supportive/randomIntNum.js';

const brainCalcGame = () => {
  const rule = 'What is the result of the expression?';
  const randomNum1 = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  const operatorOption = ['+', '-', '*'];
  const randomOperator = operatorOption[randomIntNum(0, 2)];
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
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
  const result = [rule, question, correctAnswer];
  return result;
};

export default brainCalcGame;
