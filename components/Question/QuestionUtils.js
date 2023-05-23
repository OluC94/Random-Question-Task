export function verifyAnswer(correctAnswer, inputAnswer) {
  if (correctAnswer === inputAnswer) {
    console.log("correct");
    return 1;
  }
  console.log("incorrect");
  return 0;
}
