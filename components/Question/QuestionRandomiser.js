/* 
  value1: 80,
  value2: 50,
  multiplier1: 4, --> arbitrary
  multiplier2: 3, --> arbitrary
  units: "kg",
  item1: "potatoes",
  item2: "carrots",
  totalDescription: "cost",
  totalUnits: "p",

    determine value 1 within a certain range
    based on value 1 - set a range for value 2
    based on these two, decide the items and units

    values smaller than rangeLimit --> chose an index from the itemOptions
    {
        items = [
            {
                rangeLimit: 100, 
                itemOptions: [[potatoes, carrots, lettuce, cabbage], [bread, milk], [etc]]
                usedIndices: []
            }, 
            {
                rangeLimit: 100, 
                itemOptions: [{
                    itemNames: [potatoes, carrots, lettuce, cabbage],
                    units: 'kg',
                    usedItems: []
                    }, 
                    {
                    itemNames: [milk, bottled water, orange juice, lemon juice]
                    units: 'L',
                    usedItems: []
                    },
                     {
                    itemNames: [coffee, tea, sugar]
                    units: 'g',
                    usedItems: []
                    },
                ]
            }, 
            {
                rangeLimit: 1000, 
                itemOptions: [[car, motorbike], [tv, fridge], [etc]]
                usedIndices: []
            }, 
        ];
        
    }


    Random integer between two values:
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

*/
import questionVariables from "../Question/QuestionVariables";

export function retrieveItems(value) {}

export function initUsedIndices() {
  // initialise the usedIndices arrays in the items
}

export const items = [
  {
    rangeLimit: 200,
    itemOptions: [
      {
        itemNames: ["potatoes", "carrots", "lettuce", "cabbage"],
        units: "kg",
        usedItems: [],
      },
      {
        itemNames: ["milk", "bottled water", "orange juice", "lemon juice"],
        units: "L",
        usedItems: [],
      },
      {
        itemNames: ["coffee", "tea", "sugar"],
        units: "g",
        usedItems: [],
      },
    ],
  },
];
