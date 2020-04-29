import randomIntNum from '../utils.js';
import gameFlow from '../index.js';

const arithProgressionGen = (fst, iterCounter, delta) => {
  const resultedProgression = [];
  resultedProgression.push(fst);
  for (let i = 0; i < iterCounter; i += 1) {
    const nextProgressionElem = resultedProgression[resultedProgression.length - 1] + delta;
    resultedProgression.push(nextProgressionElem);
  }
  return resultedProgression;
};

const QandAGenerator = () => {
  const fstProgressionElem = randomIntNum(1, 10);
  const iterCounter = 10;
  const progressionDelta = randomIntNum(2, 5);
  const arithProgression = arithProgressionGen(fstProgressionElem, iterCounter, progressionDelta);
  const arithProgressionMissedElem = randomIntNum(0, 10);
  const correctAnswer = arithProgression[arithProgressionMissedElem];
  arithProgression[arithProgressionMissedElem] = '..';
  const question = arithProgression.join(' ');
  const result = [];
  result.push(question, correctAnswer.toString());
  return result;
};

const brainProgressionGame = () => {
  const rule = 'What number is missing in the progression?';
  gameFlow(rule, QandAGenerator);
};

export default brainProgressionGame;
