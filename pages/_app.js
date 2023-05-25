import StaticMath from "../components/StaticMath/StaticMath";
import MathInput from "../components/MathInput/MathInput";
import { useState, useEffect } from "react";
import "../public/styles/globals.css";
import { evaluateTex } from "tex-math-parser";
import {
  createCorrectAnswer,
  getTwoRandomValues,
  retrieveItems,
  createQuestionStr,
} from "../components/Question/QuestionUtils";

export default function App({}) {
  const [memory, setMemory] = useState({});
  const [solutionShown, setSolutionShown] = useState(false);
  const [randomValues, setRandomValues] = useState(getTwoRandomValues());
  const value1 = randomValues[0];
  const value2 = randomValues[1];

  const [mulitplierValues, setMultiplierValues] = useState(
    getTwoRandomValues(3, 9)
  );
  const multiplier1 = mulitplierValues[0];
  const multiplier2 = mulitplierValues[1];

  const [itemData, setItemData] = useState(retrieveItems(value1, value2));
  const { totalUnits, totalDescription, units, isPluralisedUnits, itemNames } =
    itemData;
  const item1 = itemNames[0];
  const item2 = itemNames[1];
  const [correctAnswer, setCorrectAnswer] = useState(
    createCorrectAnswer(value1, value2)
  );
  const [questionString, setQuestionString] = useState("");

  function addToMemory(newValue) {
    setMemory((prev) => {
      return { ...prev, ...newValue };
    });
  }

  function handleCheckAnswer() {
    // invoke the markingFunction with the user input
    if (
      markingFunction(memory.mathinput1.defaultValue, correctAnswer, totalUnits)
    ) {
      console.log(memory);
      setMemory((currMemory) => {
        const updatedMemory = { ...currMemory };
        updatedMemory.mathinput1.score = currMemory.mathinput1.score;
        return updatedMemory;
      });
    }
  }

  useEffect(() => {
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
  try {
    // remove the units if they are included in the answer

    // catch incorrect units
    if (userInput.includes(totalUnits)) {
      userInput = userInput.replace(totalUnits, "");
    }

    //the evaluateTex function takes a latex string as an input and returns the evaluation as a javascript number
    inputValue = evaluateTex(userInput).evaluated;
  } catch {
    return 0;
  }

  // evaluate answer to the question
  if (inputValue === parseInt(correctAnswer)) {
    return 1;
  } else {
    return 0;
  }
}
