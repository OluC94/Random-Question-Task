import StaticMath from "../components/StaticMath/StaticMath";
import MathInput from "../components/MathInput/MathInput";
import { useState } from "react";
import "../public/styles/globals.css";
import { evaluateTex } from "tex-math-parser";
import Question from "../components/Question/Question";
import questionVariables from "@/components/Question/QuestionVariables";
import { verifyAnswer } from "../components/Question/QuestionUtils";

export default function App({}) {
  const [memory, setMemory] = useState({});
  const [solutionShown, setSolutionShown] = useState(false);
  const { correctAnswer, questionStr, totalUnits } = questionVariables;

  function addToMemory(newValue) {
    setMemory((prev) => {
      return { ...prev, ...newValue };
    });
  }

  function handleCheckAnswer() {
    console.log("correct answer: ", correctAnswer, typeof correctAnswer);
    console.log(
      memory.mathinput1.defaultValue,
      typeof memory.mathinput1.defaultValue
    );
    // invoke the markingFunction with the user input
    markingFunction(memory.mathinput1.defaultValue);
    console.log("memory: ", memory);

    // manage state so that the correct feedback is given

    // need to parse possible correct solutions (e.g. 130 p, 130 pence?)
    //
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          maxWidth: "800px",
          width: "calc(100vw - 40px)",
          marginTop: "50px",
        }}
      >
        <StaticMath
          latex={`\\text{The <StaticMath /> component can be used to write text inline with latex equations: } x^2 + 3x - 2`}
        />
        <StaticMath latex={`\\text{${questionStr}}`} />
        <br />
        <br />
        {solutionShown ? <StaticMath latex={`\\text{${correctAnswer}}`} /> : ""}
        <br />
        <br />
        <MathInput
          buttons={["power", "times"]}
          markingFunction={markingFunction}
          memKey="mathinput1"
          memory={memory}
          setMemory={addToMemory}
          placeholder="Type your answer here!"
        />
        <br />
        <br />
        <button
          onClick={() => {
            setMemory((prev) => {
              return { ...prev, feedbackShown: true };
            });
            handleCheckAnswer();
          }}
        >
          Check Answer
        </button>
        <br />
        {!solutionShown ? (
          <button
            style={{ marginTop: "20px" }}
            onClick={() => {
              setSolutionShown(true);
            }}
          >
            Show Solution
          </button>
        ) : (
          ""
        )}
        {solutionShown ? (
          <button
            style={{ marginTop: "20px" }}
            onClick={() => {
              setSolutionShown(false);
            }}
          >
            Hide Solution
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function markingFunction(userInput) {
  let inputValue;
  console.log("userInput", userInput, typeof userInput);
  // evaluateTex can only recieve numbers

  try {
    // remove the units if they are included in the answer
    if (userInput[userInput.length - 1] === questionVariables.totalUnits) {
      userInput = userInput.substring(0, userInput.length - 1);
    }
    //the evaluateTex function takes a latex string as an input and returns the evaluation as a javascript number
    inputValue = evaluateTex(userInput).evaluated;
    console.log("inputValue", inputValue);
  } catch {
    return 0;
  }

  // evaluate answer to the question
  if (inputValue === parseInt(questionVariables.correctAnswer)) {
    console.log("returning 1");
    return 1;
  } else {
    return 0;
  }
}
