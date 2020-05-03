import gameStart from '../index.js';
import generateNum from '../utils.js';

const generateProgression = (firstElem, delta) => {
  const iterCounter = 10;
  const resultedProgression = [firstElem];
  for (let i = 0; i < iterCounter; i += 1) {
    resultedProgression.push(resultedProgression[i] + delta);
  }
  return resultedProgression;
};

const generateQandA = () => {
  const firstElem = generateNum(0, 10);
  const delta = generateNum(2, 5);
  const progression = generateProgression(firstElem, delta);
  const missedElemIndex = generateNum(0, 10);
  const correctAnswer = progression[missedElemIndex];
  progression[missedElemIndex] = '..';
  const question = progression.join(' ');
  const result = [question, correctAnswer.toString()];
  return result;
};

const rule = 'What number is missing in the progression?';

export default () => gameStart(rule, generateQandA);
