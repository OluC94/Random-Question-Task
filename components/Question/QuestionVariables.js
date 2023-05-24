const questionVariables = {
  value1: 80,
  value2: 50,
  multiplier1: 4,
  multiplier2: 3,
  units: "kg",
  item1: "potatoes",
  item2: "carrots",
  totalDescription: "cost",
  totalUnits: "p",
};

questionVariables.questionTotal1 =
  questionVariables.multiplier1 * questionVariables.value1 +
  questionVariables.multiplier2 * questionVariables.value2;

questionVariables.questionTotal2 =
  questionVariables.multiplier2 * questionVariables.value1 +
  questionVariables.multiplier1 * questionVariables.value2;

questionVariables.correctAnswer = `${
  questionVariables.value1 + questionVariables.value2
}${questionVariables.totalUnits}`;

questionVariables.questionStr = `
  ${questionVariables.multiplier1}${questionVariables.units} of ${questionVariables.item1} and ${questionVariables.multiplier2}${questionVariables.units} of ${questionVariables.item2} have a total ${questionVariables.totalDescription} of ${questionVariables.questionTotal1}${questionVariables.totalUnits}.
  \n
  ${questionVariables.multiplier2}${questionVariables.units} of ${questionVariables.item1} and ${questionVariables.multiplier1}${questionVariables.units} of ${questionVariables.item2} have a total ${questionVariables.totalDescription} of ${questionVariables.questionTotal2}${questionVariables.totalUnits}.
  \n
  Work out the total ${questionVariables.totalDescription} of 1${questionVariables.units} of ${questionVariables.item1} and 1${questionVariables.units} of ${questionVariables.item2}.`;

export default questionVariables;

// need a createQuestionStr function that uses the state
