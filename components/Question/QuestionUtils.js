import { items } from "../Question/QuestionRandomiser";

export function getTwoRandomValues(min = 10, max = 150) {
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

export function createCorrectAnswer(value1, value2) {
  return `${value1 + value2}`;
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
    isPluralisedUnits,
  } = questionData;

  const questionTotal1 = multiplier1 * value1 + multiplier2 * value2;
  const questionTotal2 = multiplier2 * value1 + multiplier1 * value2;

  const parsedUnits = isPluralisedUnits ? `${units}s` : `${units}`;

  return `
  ${multiplier1} ${parsedUnits} of ${item1} and ${multiplier2} ${parsedUnits} of ${item2} have a total ${totalDescription} of ${questionTotal1}${totalUnits}.
  \n
  ${multiplier2} ${parsedUnits} of ${item1} and ${multiplier1} ${parsedUnits} of ${item2} have a total ${totalDescription} of ${questionTotal2}${totalUnits}.
  \n
  Work out the total ${totalDescription} of 1 ${units} of ${item1} and 1 ${units} of ${item2}.`;
}

function getRandomIndex(max) {
  // random number that excludes the max value
  return Math.floor(Math.random() * max);
}

export function retrieveItems(value1, value2) {
  const itemData = {
    itemNames: [],
    units: "",
    totalDescription: "",
    totalUnits: "",
    isPluralisedUnits: false,
  };

  let i = 0;
  while (Object.keys(itemData.itemNames).length < 2) {
    if (value1 + value2 > items[i].rangeLimit) {
      i++;
    } else {
      // get a random index for the item options
      const itemOptionIdx = getRandomIndex(items[i].itemOptions.length);

      // extract details for the question
      itemData.units = items[i].itemOptions[itemOptionIdx].units;
      itemData.totalDescription = items[i].description;
      itemData.totalUnits = items[i].totalUnits;
      itemData.isPluralisedUnits =
        items[i].itemOptions[itemOptionIdx].isPluralisedUnits;

      // two random indexes for the item names
      const itemNamesIdxs = getTwoRandomValues(
        0,
        items[i].itemOptions[itemOptionIdx].itemNames.length
      );

      itemData.itemNames.push(
        items[i].itemOptions[itemOptionIdx].itemNames[itemNamesIdxs[0]]
      );
      itemData.itemNames.push(
        items[i].itemOptions[itemOptionIdx].itemNames[itemNamesIdxs[1]]
      );
    }
  }

  return itemData;
}
