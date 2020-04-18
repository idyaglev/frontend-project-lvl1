const brainEvenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = Math.round(Math.random() * 100);
  const question = randomNumber;
  let correctAnswer = '';
  const result = [];
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  result.push(rule, question, correctAnswer);
  return result;
};

export default brainEvenGame;
