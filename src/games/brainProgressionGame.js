import generateNum from '../utils.js';
import gameStart from '../index.js';

const generateProgression = (firstElem, iterCounter, delta) => {
  const resultedProgression = [];
  resultedProgression.push(firstElem);
  for (let i = 0; i < iterCounter; i += 1) {
    const nextProgressionElem = resultedProgression[i] + delta;
    resultedProgression.push(nextProgressionElem);
  }
  return resultedProgression;
};

const generateQandA = (firstElem, iterCounter, progressionDelta) => {
  const question = generateProgression(firstElem, iterCounter, progressionDelta);
  const arithProgressionMissedElem = generateNum(0, 10);
  const answer = question[arithProgressionMissedElem];
  question[arithProgressionMissedElem] = '..';
  const result = [question.join(' '), answer];
  return result;
};

const generateGameParam = () => {
  const firstElem = generateNum(1, 10);
  const iterCounter = 10;
  const progressionDelta = generateNum(2, 5);
  const [question, answer] = generateQandA(firstElem, iterCounter, progressionDelta);
  const result = [question, answer.toString()];
  return result;
};

const rule = 'What number is missing in the progression?';

export default () => {
  gameStart(rule, generateGameParam);
};
