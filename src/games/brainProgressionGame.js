import randomIntNum from '../supportive/randomIntNum.js';
import arithProgressionGen from '../supportive/arithProgressionGen.js';

const brainProgressionGame = () => {
  const rule = 'What number is missing in the progression?';
  const fstProgressionElem = randomIntNum(1, 10);
  const iterCounter = 10;
  const progressionDelta = randomIntNum(2, 5);
  const arithProgression = arithProgressionGen(fstProgressionElem, iterCounter, progressionDelta);
  const arithProgressionMissedElem = randomIntNum(0, 10);
  const correctAnswer = arithProgression[arithProgressionMissedElem];
  arithProgression[arithProgressionMissedElem] = '..';
  const question = arithProgression.join(' ');
  const result = [rule, question, correctAnswer];
  return result;
};

export default brainProgressionGame;
