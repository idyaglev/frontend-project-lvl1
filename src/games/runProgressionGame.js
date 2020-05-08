import runGame from '../index.js';
import generateNum from '../utils.js';

const generateProgression = (firstElem, delta, progressionLength) => {
  const resultedProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    resultedProgression.push(firstElem + delta * i);
  }
  return resultedProgression;
};

const generateQandA = () => {
  const progressionLength = 10;
  const firstElem = generateNum(0, progressionLength);
  const delta = generateNum(2, 5);
  const progression = generateProgression(firstElem, delta, progressionLength);
  const missedElemIndex = generateNum(0, progressionLength - 1);
  const correctAnswer = progression[missedElemIndex];
  progression[missedElemIndex] = '..';
  const question = progression.join(' ');
  const result = [question, correctAnswer.toString()];
  return result;
};

const rule = 'What number is missing in the progression?';

export default () => runGame(rule, generateQandA);
