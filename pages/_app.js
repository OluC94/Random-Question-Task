import StaticMath from "../components/StaticMath/StaticMath";
import MathInput from "../components/MathInput/MathInput";
import { useState, useEffect } from "react";
import "../public/styles/globals.css";
import { evaluateTex } from "tex-math-parser";
import Question from "../components/Question/Question";
import questionVariables from "@/components/Question/QuestionVariables";
import { randomiseVariables } from "../components/Question/QuestionRandomiser";
import {
  verifyAnswer,
  createCorrectAnswer,
  getTwoRandomValues,
  retrieveItems,
  createQuestionStr,
} from "../components/Question/QuestionUtils";

export default function App({}) {
  const [memory, setMemory] = useState({});
  const [solutionShown, setSolutionShown] = useState(false);
  const [value1, setValue1] = useState(getTwoRandomValues()[0]);
  const [value2, setValue2] = useState(getTwoRandomValues()[1]);

  const [multiplier1, setMultiplier1] = useState(getTwoRandomValues(3, 9)[0]);
  const [multiplier2, setMultiplier2] = useState(getTwoRandomValues(3, 9)[1]);
  const [itemData, setItemData] = useState(retrieveItems(value1));
  const [totalUnits, setTotalUnits] = useState(itemData.totalUnits);
  const [totalDescription, setTotalDescription] = useState(
    itemData.description
  );
  const [units, setUnits] = useState(itemData.units);
  const [item1, setItem1] = useState(itemData.itemNames[0]);
  const [item2, setItem2] = useState(itemData.itemNames[1]);
  const [isPluralisedUnits, setIsPluralisedUnits] = useState(
    itemData.pluralisedUnits
  );
  const [correctAnswer, setCorrectAnswer] = useState(
    createCorrectAnswer(value1, value2, totalUnits)
  );
  const [questionString, setQuestionString] = useState("");

  function addToMemory(newValue) {
    setMemory((prev) => {
      return { ...prev, ...newValue };
    });
  }

  function handleCheckAnswer() {
    console.log(
      memory.mathinput1.defaultValue,
      typeof memory.mathinput1.defaultValue
    );
    // invoke the markingFunction with the user input
    markingFunction(memory.mathinput1.defaultValue, correctAnswer, totalUnits);
    console.log("memory: ", memory);
  }

  useEffect(() => {
    console.log("rendered");

    const questionStringData = {
      value1,
      value2,
      multiplier1,
      multiplier2,
      units,
      item1,
      item2,
      totalDescription,
      totalUnits,
      isPluralisedUnits,
    };

    setQuestionString(createQuestionStr(questionStringData));
  }, []);

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
        <StaticMath latex={`\\text{${questionString}}`} />
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

function markingFunction(userInput, correctAnswer, totalUnits) {
  let inputValue;
  console.log("userInput", userInput, typeof userInput);
  console.log("correct answer: ", correctAnswer, typeof correctAnswer);
  // evaluateTex can only recieve numbers

  try {
    // remove the units if they are included in the answer
    if (userInput[userInput.length - 1] === totalUnits) {
      userInput = userInput.substring(0, userInput.length - 1);
    }
    //the evaluateTex function takes a latex string as an input and returns the evaluation as a javascript number
    inputValue = evaluateTex(userInput).evaluated;
    console.log("inputValue", inputValue);
  } catch {
    return 0;
  }

  // evaluate answer to the question
  if (inputValue === parseInt(correctAnswer)) {
    console.log("returning 1");
    return 1;
  } else {
    return 0;
  }
}
