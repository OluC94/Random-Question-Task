const QuestionVariables = {
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

QuestionVariables.questionTotal1 =
  QuestionVariables.multiplier1 * QuestionVariables.value1 +
  QuestionVariables.multiplier2 * QuestionVariables.value2;

QuestionVariables.questionTotal2 =
  QuestionVariables.multiplier2 * QuestionVariables.value1 +
  QuestionVariables.multiplier1 * QuestionVariables.value2;

export default QuestionVariables;
