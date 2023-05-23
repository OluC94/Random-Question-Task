// won't need this, can delete

import questionVariables from "./QuestionVariables";

export default function Question() {
  const questionString1 = `${questionVariables.multiplier1}${questionVariables.units} of ${questionVariables.item1} and ${questionVariables.multiplier2}${questionVariables.units} of ${questionVariables.item2} have a total ${questionVariables.totalDescription} of ${questionVariables.questionTotal1}${questionVariables.totalUnits}`;
  const questionString2 = `${questionVariables.multiplier2}${questionVariables.units} of ${questionVariables.item1} and ${questionVariables.multiplier1}${questionVariables.units} of ${questionVariables.item2} have a total ${questionVariables.totalDescription} of ${questionVariables.questionTotal2}${questionVariables.totalUnits}`;
  const questionString3 = `Work out the total ${questionVariables.totalDescription} of {1}${questionVariables.units} of ${questionVariables.item1} and {1}${questionVariables.units} of ${questionVariables.item2}`;
  return (
    <>
      <p>{questionString1}</p>
      <p>{questionString2}</p>
      <br />
      <p>{questionString3}</p>
    </>
  );
}
