import readlineSync from 'readline-sync';

const greetingsFunction = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameFlow = (rule, QandAGenerator) => {
  const userName = greetingsFunction();
  const winingMessage = `Congratulations, ${userName}!`;
  let numberOfUserWins = 0;
  let failureMessage = '';
  console.log(rule);
  while (numberOfUserWins < 3) {
    const questionAndAnswer = QandAGenerator();
    console.log(`Question: ${questionAndAnswer[0]}`);
    const userAnswer = readlineSync.question('Your answer ');
    if (userAnswer !== questionAndAnswer[1]) {
      failureMessage = `"${userAnswer}" is wrong answer ;(. Correct answer was "${questionAndAnswer[1]}"\nLet's try again, ${userName}!`;
      break;
    } else {
      console.log('Correct!');
      numberOfUserWins += 1;
    }
  }
  if (numberOfUserWins !== 3) {
    console.log(failureMessage);
  } else {
    console.log(winingMessage);
  }
};

export default gameFlow;
