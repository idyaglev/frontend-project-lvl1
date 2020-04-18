import readlineSync from 'readline-sync';

const greetingsFunction = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameStart = (game = null) => {
  let numberOfUsrWins = 0;
  let result = '';
  let incorrectAnswer = '';
  let finalCorrectAnswer = '';
  const userName = greetingsFunction();
  if (game === null) {
    return 'Please, choose your game ;)';
  }
  const rule = game()[0];
  console.log(rule);
  while (numberOfUsrWins < 3) {
    const gameParameters = game();
    const question = gameParameters[1];
    const correctAnswer = gameParameters[2];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (typeof correctAnswer === 'number') {
      const intUserAnswer = userAnswer - 0;
      if (intUserAnswer === correctAnswer) {
        numberOfUsrWins += 1;
        console.log('Correct!');
      } else {
        incorrectAnswer = userAnswer;
        finalCorrectAnswer = correctAnswer;
        break;
      }
    } else if (correctAnswer === userAnswer.toLowerCase() && typeof correctAnswer !== 'number') {
      numberOfUsrWins += 1;
      console.log('Correct!');
    } else if (correctAnswer !== userAnswer.toLowerCase() && typeof correctAnswer !== 'number') {
      incorrectAnswer = userAnswer;
      finalCorrectAnswer = correctAnswer;
      break;
    }
  }

  if (numberOfUsrWins === 3) {
    result = `Congratulations, ${userName}!`;
    console.log(result);
    return result;
  }
  result = `${incorrectAnswer} is wrong answer ;(. Correct answer was ${finalCorrectAnswer}.\nLet's try again, ${userName}!`;
  console.log(result);
  return result;
};

export { greetingsFunction, gameStart };
