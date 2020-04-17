import readlineSync from 'readline-sync';

const greetingsFunction = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const brainEvenGame = (userName) => {
  let numberOfUserWins = 0;
  while (numberOfUserWins < 3) {
    const randomNumber = Math.round(Math.random() * 100);
    let evality = Boolean;
    let correctAnswer = '';
    if (randomNumber % 2 === 0) {
      evality = true;
      correctAnswer = 'yes';
    } else {
      evality = false;
      correctAnswer = 'no';
    }
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === 'yes' && evality === false) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      break;
    } else if (userAnswer.toLowerCase() === 'no' && evality === true) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      break;
    } else if (userAnswer.toLowerCase() !== 'no' && userAnswer.toLowerCase() !== 'yes') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      numberOfUserWins += 1;
    }
  }
  if (numberOfUserWins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const brainEvenGameStart = () => {
  const userName = greetingsFunction();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  brainEvenGame(userName);
};

export { greetingsFunction, brainEvenGame, brainEvenGameStart };
