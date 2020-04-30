import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameStart = (rule, generateQandA) => {
  const userName = greet();
  console.log(rule);

  let numberOfUserWins = 0;
  while (numberOfUserWins < 3) {
    const [question, answer] = generateQandA();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    numberOfUserWins += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};


export default gameStart;
