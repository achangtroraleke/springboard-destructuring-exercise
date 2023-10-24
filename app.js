// Question 1

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

// Answer: Returns 8 and 1846

// Question 2

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // ?

// Answer: Returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Question 3

// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
//   getUserData({firstName: "Melissa"}) // ?
//   getUserData({}) // ?

//   Answer: 
//   Your name is Alejandro, and you like purple.
//   Your name is Melissa, and you like green.
//   Your name is undefined, and you like green.

// Question 4 
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?

// Answer: -Maya -Marisa -Chi

// Question 5
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // ?
//   console.log(whiskers); // ?
//   console.log(aFewOfMyFavoriteThings); // ?

//Answer:
// 1. "Rainsdrops on roses"
// 2. "whiskers on kittens"
// 3. returns array with ["Bright copper kettles", "warm woolen mittens", "Brown paper package tied up with strings"]

// Question 6
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
//
// console.log(numbers) // ?

// Answer: return [10, 30, 20]


/* Write an ES2015 Version 
var obj = {
    numbers: {
        a:1,
        b:2
    }
};

let {numbers: {a, b}} = obj 

*/

/*
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

Write an ES2015 Version
[1, 2] = [2, 1]
*/


const raceResults = (arrOfRacer) =>{
    return [first, second, third, ...rest]  = arrOfRacer
}

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])