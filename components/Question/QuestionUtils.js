import { items } from "../Question/QuestionRandomiser";

export function randomiseValues(min = 30, max = 150) {
  // select a random value within a chosen range
  // min inclusive, max exclusive
  min = Math.ceil(min);
  max = Math.floor(max);

  const uniqueNumbers = [];
  // make sure that the two random values aren't the same
  while (uniqueNumbers.length < 2) {
    const n = Math.floor(Math.random() * (max - min) + min);
    if (!uniqueNumbers.includes(n)) {
      uniqueNumbers.push(n);
    }
  }
  return uniqueNumbers;
}

export function createCorrectAnswer(value1, value2, units) {
  return `${value1 + value2}${units}`;
}

// pass in an opbject containing all question variables
export function createQuestionStr(questionData) {
  const {
    value1,
    value2,
    totalUnits,
    multiplier1,
    multiplier2,
    units,
    item1,
    item2,
    totalDescription,
  } = questionData;
  console.log("within qstring function: ", value1, value2, totalUnits);

  const questionTotal1 = multiplier1 * value1 + multiplier2 * value2;
  const questionTotal2 = multiplier2 * value1 + multiplier1 * value2;

  return `
  ${multiplier1}${units} of ${item1} and ${multiplier2}${units} of ${item2} have a total ${totalDescription} of ${questionTotal1}${totalUnits}.
  \n
  ${multiplier2}${units} of ${item1} and ${multiplier1}${units} of ${item2} have a total ${totalDescription} of ${questionTotal2}${totalUnits}.
  \n
  Work out the total ${totalDescription} of 1${units} of ${item1} and 1${units} of ${item2}.`;
}

function getRandomIndex(max) {
  // random number that excludes the max value
  return Math.floor(Math.random() * max);
}

export function retrieveItems(value) {
  // take the first randomised value
}

/* \
need to randomise items

access item variables:
  items[i].itemOptions[randInt1].itemNames[randInt2]

access units items[i].itemOptions[randInt1].units

access usedItems:
  items[i].itemOptions[randInt1].usedItems


Aim - rick a random category, than pick two random items from that category
0 - check the rangelimit
1 - generate a randInt between 0 and items[i].itemOptions.length (not inclusive)
2 - extract the units (see above)
3 - get two random numbers using range 0 to ...itemNames.length (not inclusive)
4 - use these as the items



update the solution so that it goes into detail
*/
