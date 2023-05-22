import QuestionVariables from "./variables/QuestionVariables";

export default function Question() {
  const questionString1 = `${QuestionVariables.multiplier1}${QuestionVariables.units} of ${QuestionVariables.item1} and ${QuestionVariables.multiplier2}${QuestionVariables.units} of ${QuestionVariables.item2} have a total ${QuestionVariables.totalDescription} of ${QuestionVariables.questionTotal1}${QuestionVariables.totalUnits}`;
  const questionString2 = `${QuestionVariables.multiplier2}${QuestionVariables.units} of ${QuestionVariables.item1} and ${QuestionVariables.multiplier1}${QuestionVariables.units} of ${QuestionVariables.item2} have a total ${QuestionVariables.totalDescription} of ${QuestionVariables.questionTotal2}${QuestionVariables.totalUnits}`;
  const questionString3 = `Work out the total ${QuestionVariables.totalDescription} of {1}${QuestionVariables.units} of ${QuestionVariables.item1} and {1}${QuestionVariables.units} of ${QuestionVariables.item2}`;
  return (
    <>
      <p>{questionString1}</p>
      <p>{questionString2}</p>
      <br />
      <p>{questionString3}</p>
    </>
  );
}
