import randomIntNum from '../supportive/randomIntNum.js';
import isPrime from '../supportive/isPrime.js';

const brainPrimeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randomNum = randomIntNum(0, 100);
  const question = randomNum;
  let correctAnswer = '';
  if (isPrime(randomNum)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const result = [rule, question, correctAnswer];
  return result;
};

export default brainPrimeGame;
