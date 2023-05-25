import questionVariables from "../Question/QuestionVariables";

export function retrieveItems(value) {}

export function initUsedIndices() {
  // initialise the usedIndices arrays in the items
}

export const items = [
  // {
  //   rangeLimit: 50,
  //   description: "price",
  //   totalUnits: "p",
  //   itemOptions: [
  //     {
  //       itemNames: ["coffee", "tea", "sugar"],
  //       units: "bag",
  //       // pluralisedUnits: true,
  //     },
  //   ],
  // },
  {
    rangeLimit: 200,
    description: "cost",
    totalUnits: "p",
    itemOptions: [
      {
        itemNames: ["potatoes", "carrots", "lettuce", "cabbage"],
        units: "kg",
        pluralisedUnits: false,
      },
      {
        itemNames: ["milk", "bottled water", "orange juice", "lemon juice"],
        units: "L",
        pluralisedUnits: false,
      },
      {
        itemNames: ["coffee", "tea", "sugar"],
        units: "bag",
        pluralisedUnits: true,
      },
    ],
  },
];
