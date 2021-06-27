console.log("\n---------edabit.com/challenge----------\n");

console.log("\n---------Q-1-Volume of a Box-----------\n");

/* Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box. */
/* 
function volumeOfBox(width, length, height) {
  result = width * length * height;
  return result;
}
console.log(volumeOfBox(2, 5, 1));
console.log(volumeOfBox(4, 2, 2));
console.log(volumeOfBox(2, 3, 5)); */

let box1 = {
  width: 2,
  length: 5,
  height: 1,
};
let box2 = {
  width: 4,
  length: 2,
  height: 2,
};
let box3 = {
  width: 2,
  length: 3,
  height: 5,
};

function volumeOfBox(sizes) {
  return sizes.width * sizes.height * sizes.length;
}

console.log(volumeOfBox(box1));
console.log(volumeOfBox(box2));
console.log(volumeOfBox(box3));

// 10
// 16
// 30

console.log("\n---------Q-2-Extract City Facts-----------\n");
/* 
Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
    name
    population
    continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
 */

let sp = {
  name: "Sao Paulo",
  population: "12,000,033",
  continent: "Brazil",
};

let berlin = {
  name: "Berlin",
  population: "3,562,000",
  continent: "Europe",
};

function cityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}.`;
}

console.log(cityFacts(sp));
console.log(cityFacts(berlin));

console.log("\n---------Q-3-Does the Object Contain a Given Key?-----------\n");

/* Write a function that returns true if a hash contains the specified key, and false otherwise.
hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true */

function hasKey(sampleObj, searchKey) {
  let pairs = Object.entries(sampleObj);

  for (let i = 0; i < pairs.length; i++) {
    if (searchKey === pairs[i][0]) {
      return true;
    }
  }
  return false;
}

console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));

console.log("\n---------Q-4-Calculate the Profit-----------\n");

/* You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar. */

function profit(info) {
  return Math.round(info.sellPrice - info.costPrice) * info.inventory;
}

/* let c = {
    costPrice: 32.67,
    sellPrice: 45.0,
    inventory: 1200,
  };

profit(c);

the same as above */

let result1 = profit({
  costPrice: 32.67,
  sellPrice: 45.0,
  inventory: 1200,
});

let result2 = profit({
  costPrice: 225.89,
  sellPrice: 550.0,
  inventory: 100,
});

let result3 = profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500,
});

console.log(result1);
console.log(result2);
console.log(result3);

console.log("\n---------Q-5-Planetary Weight Converter-----------\n");
/* In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.

To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:

weight on planetA / gravitational force of planetA * gravitational force of planetB

Planet	m/s²
Mercury	3.7
Venus	8.87
Earth	9.81
Mars	3.711
Jupiter	24.79
Saturn	10.44
Uranus	8.69
Neptune	11.15
Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth. */

/* spaceWeights("Earth", 1, "Mars") ➞ 0.38

spaceWeights("Earth", 1, "Jupiter") ➞ 2.53

spaceWeights("Earth", 1, "Neptune") ➞ 1.14 */

function spaceWeights(planetA, weight, planetB) {
  let grav = {
    Venus: 8.87,
    Earth: 9.81,
    Mars: 3.711,
    Jupiter: 24.79,
    Saturn: 10.44,
    Uranus: 8.69,
    Neptune: 11.15,
  };
  return Number(((weight / grav[planetA]) * grav[planetB]).toFixed(2));
}

console.log(spaceWeights("Earth", 1, "Mars"));
console.log(spaceWeights("Earth", 1, "Jupiter"));
console.log(spaceWeights("Earth", 1, "Neptune"));

console.log("\n---------Q-6-International Greetings-----------\n");

/* 
Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }

  Write a function that takes in a name and returns a name tag, that should read:

  "Hi! I'm [name], and I'm from [country]."

  If the name is not in the object, return:

  "Hi! I'm a guest."


greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

greeting("Monti") ➞ "Hi! I'm a guest." */

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};
function greeting(name) {
  if (GUEST_LIST.hasOwnProperty(name)) {
    return console.log(`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`);
  } else {
    return console.log("Hi! I'm a guest.");
  }
}
greeting("Randy");
greeting("Sam");
greeting("Monti");
greeting("Norman");
