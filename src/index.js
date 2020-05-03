import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameStart = (rule, generateQandA) => {
  const userName = greet();
  const successCount = 3;
  console.log(rule);

  let userWinsCounter = 0;
  while (userWinsCounter < successCount) {
    const [question, correctAnswer] = generateQandA();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    userWinsCounter += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};


export default gameStart;
