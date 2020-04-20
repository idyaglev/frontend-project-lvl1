const arithProgressionGen = (fst, iterCounter, delta) => {
  const resultedProgression = [];
  resultedProgression.push(fst);
  for (let i = 0; i < iterCounter; i += 1) {
    const nextProgressionElem = resultedProgression[resultedProgression.length - 1] + delta;
    resultedProgression.push(nextProgressionElem);
  }
  return resultedProgression;
};

export default arithProgressionGen;
