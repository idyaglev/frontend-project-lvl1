import gameFlow from '../index.js';
import randomIntNum from '../utils.js';

const QandAGenerator = () => {
  const randomNumber = randomIntNum(1, 100);
  const question = randomNumber;
  let correctAnswer = '';
  const result = [];
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  result.push(question, correctAnswer);
  return result;
};

const brainEvenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameFlow(rule, QandAGenerator);
};

export default brainEvenGame;
