// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated
// using the formula: BMI = mass / (height * height) (mass in kg and height in
// meters).
// Your task is to write some code to help them:
// 1. Store Mark's and John's mass and height in variables
// called massMark, heightMark, massJohn and heightJohn.
// 2. Calculate both their BMIs using the formula, and store the results in two
// variables called BMIMark and BMIJohn.
// 3. Log the value of BMIMark and BMIJohn to the console.
// 4. BONUS: Create a Boolean variable markHigherBMI containing information about
// whether Mark has a higher BMI than John. Log it to the console too
// Test data:
// • Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// • Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


let massMark=78;
let heightMark=1.69;
let massJohn=92;
let heightJohn=1.95;
let BMIMark= massMark/(heightMark * heightMark);
let BMIJohn= massJohn/(heightJohn * heightJohn);
let markHigherBMI=BMIMark>BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

massMark=95;
heightMark=1.88;
massJohn=85;
heightJohn=1.76;
BMIMark= massMark/(heightMark * heightMark);
BMIJohn= massJohn/(heightJohn * heightJohn);
markHigherBMI=BMIMark>BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it:
// 1. Print a nice output to the console, telling the user who has the higher BMI. The
// message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
// 2. Modify the outputs above to use template literals to include the BMI values in the
// outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI
// (29.1) is higher than Mark's (27)!".
// Note: Don't round the BMI values. Leave them as they are.

massMark=95;
heightMark=1.88;
massJohn=85;
heightJohn=1.76;
BMIMark= massMark/(heightMark * heightMark);
BMIJohn= massJohn/(heightJohn * heightJohn);
markHigherBMI=BMIMark>BMIJohn;

BMIMark>BMIJohn ?console.log("Mark's BMI is higher than John's!"):console.log("John's BMI is higher than Mark's!");
BMIMark>BMIJohn ?console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`):console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);

massMark=78;
heightMark=1.69;
massJohn=92;
heightJohn=1.95;
BMIMark= massMark/(heightMark * heightMark);
BMIJohn= massJohn/(heightJohn * heightJohn);
markHigherBMI=BMIMark>BMIJohn;

BMIMark>BMIJohn ?console.log("Mark's BMI is higher than John's!"):console.log("John's BMI is higher than Mark's!");
BMIMark>BMIJohn ?console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`):console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);

// Coding Challenge #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below.
// The average score for Dolphins should be assigned to the scoreDolphins variable,
// and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition,
// and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.
// Test data:
// • Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// • Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// • Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


let scoreDolphins= 0;
let scoreKoalas= 0;
function average(Dolphins,Koalas){
    scoreDolphins=Dolphins.reduce((a,b,c)=>a+b+c)/Dolphins.length;
    scoreKoalas=Koalas.reduce((a,b,c)=>a+b+c)/Koalas.length;
    if(scoreDolphins>scoreKoalas){
     console.log("Dolphins win the trophy");
   }else if(scoreDolphins<scoreKoalas){
     console.log("Koalas win the trophy");
   }else{
     console.log("Both win the trophy");
   }
}
let Dolphins=[96,108,89];
let Koalas=[88,91,110];
average(Dolphins,Koalas);                       
Dolphins=[9,112,101];
Koalas=[109,95,123];
average(Dolphins,Koalas); 
Dolphins=[97,112,101];
Koalas=[109,95,106];
average(Dolphins,Koalas);

// Coding Challenge #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant.
// In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value
// is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called tip for
// this. It's not allowed to use an if...else statement (if it's easier for you, you can
// start with an if...else statement, and then try to convert it to a ternary
// operator).
// 2. Print a string to the console containing the bill value, the tip, and the final
// value (bill + tip).
// Example: The bill was 275, the tip was 41.25, and the total value 316.25.
// Note: Use the values of the bill and tip variables to construct this string. Don't
// hard-code them
// TEST DATA: Test with different bill values: 275, 40, and 430

let bill=275;
let tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

bill=40;
tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

bill=430;
tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

// LECTURE: Functions
// 1. Write a function called describeCountry which takes three parameters:
// country, population and capitalCity. Based on this input, the function returns
// a string with this format: 'Finland has 6 million people and its capital city is
// Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console 

function describeCountry(country,population,capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry('India',1469.5,'New Delhi'));     
console.log(describeCountry('Japan',123,'Tokyo'))  
console.log(describeCountry('Russia',144,'Moscow'))   

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called percentageOfWorld1 which receives a population value, and returns the
// percentage of the world population that the given population represents. For
// example, China has 1441 million people, so it's about 18.2% of the world
// population
// 2. To calculate the percentage, divide the given 'population' value by 7900 and
// then multiply by 100
// 3. Call percentageOfWorld1 for 3 populations of countries of your choice, store
// the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// percentageOfWorld2, and also call it with 3 country populations (can be the
// same populations).

function percentageOfWorld1(population){
  return (population/7900)*100
}
let a=percentageOfWorld1(123);
let b=percentageOfWorld1(144);
let c=percentageOfWorld1(1441);
console.log(`The population% of Japan: ${a}`);
console.log(`The population% of Russia: ${b}`);
console.log(`The population% of China: ${c}`);

let z=function percentageOfWorld2(population){return (population/7900)*100};
console.log(`The population% of Japan: ${z(123)}`);
console.log(`The population% of Russia: ${z(144)}`);
console.log(`The population% of China: ${z(1441)}`);

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
//   percentageOfWorld3

let x= percentageOfWorld3=(population)=>((population/7900)*100);
console.log(x(123),x(144),x(1441));

// LECTURE: Functions Calling Other Functions
// 1. Create a function called describePopulation. Use the function type you like the
// most. This function takes in two arguments: 'country' and 'population', and
// returns a string like this: 'China has 1441 million people, which is about 18.2% of
// the world.'
// 2. To calculate the percentage, describePopulation call the
// percentageOfWorld1, you created earlier
// 3. Call describePopulation with data for 3 countries of your choice

let d=function describePopulation(country,population){
  let e=percentageOfWorld1(population);
  console.log(`${country} has ${population} million people, which is about ${e} of the world.`);
}
d('Japan',123),d('China',1441),d('Russia',144);

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called populations
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called percentages containing the percentages of the world
// population for these 4 population values. Use the function percentageOfWorld1
// that you created earlier to compute the 4 percentage values 

let populations=[123,144,1441,1469.5];
console.log(populations.length===4);
let percentages=[percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2]),percentageOfWorld1(populations[3])];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called neighbours
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So, add it to the end of the neighbours array
// 3. Unfortunately, after some time, the new country is dissolved. So, remove it from
// the end of the array
// 4. If the neighbours array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the neighbours array, and then use that index to change
// the array at that index position. For example, you can search for 'Sweden' in the
// array, and then replace it with 'Republic of Sweden'.

let indiaNeighbours=['China','Pakistan','Afghanistan','Nepal','Bhutan','Myanmar','Bangladesh'];
indiaNeighbours.push('Srilanka');
console.log(indiaNeighbours);
indiaNeighbours.pop();
console.log(indiaNeighbours);
indiaNeighbours.includes('Germany') ? console.log('Probably a central European country') : console.log('Probably not a central European country');
indiaNeighbours[0]='Japan';
console.log(indiaNeighbours);

// LECTURE: Introduction to Objects
// 1. Create an object called myCountry for a country of your choice, containing
// properties country, capital, language, population and neighbours (an array like
// we used in previous assignments) 
 
let myCountry={
  country:'India',
  capital:'New Delhi',
  language:'Hindi',
  population:1469.5,
  neighbours:['China','Pakistan','Afghanistan','Nepal','Bhutan','Myanmar','Bangladesh']
}
console.log(myCountry);   

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring
// countries and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation. 

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population+=2;
console.log(myCountry.population);
myCountry['population']-=2;
console.log(myCountry.population);

// LECTURE: Object Methods
// 1. Add a method called describe to the myCountry object. This method will log a
// string to the console, similar to the string logged in the previous assignment,
// but this time using the 'this' keyword.
// 2. Call the describe method
// 3. Add a method called checkIsland to the myCountry object. This method will
// set a new property on the object, called isIsland.
// isIsland will be true if there are no neighbouring countries, and false if there
// are. Use the ternary operator to set the property. 

myCountry.describe=function(){console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)}
myCountry.describe();
myCountry.checkIsland=function(){myCountry.isIsland=this.neighbours.length===0 ? true : false};
myCountry.checkIsland();
console.log(myCountry);

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting' 

for(let i=0;i<=50;i++){
  console.log(`Voter number ${i} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the populations array from a previous assignment
// 2. Use a for loop to compute an array called percentages2 containing the
// percentages of the world population for the 4 population values. Use the
// function percentageOfWorld1 that you created earlier
// 3. Confirm that percentages2 contains exactly the same values as the
// percentages array that we created manually in the previous assignment, and
// reflect on how much better this solution is

let percentages2=[];
for(i=0;i<populations.length;i++){
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called listOfNeighbours
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway 

let listOfNeighbours=[
  ['Canada','Mexico'],
  ['Spain'],
  ['Norway','Sweden','Russia']
];

for(i=0;i<listOfNeighbours.length;i++){
  for(j=0;j<listOfNeighbours[i].length;j++){
    console.log(`Neighbour:${listOfNeighbours[i][j]}`);
  }
}

// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and
// Continuing', but this time using a while loop (call the array percentages3)
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop? 

let percentages3=[];
while(i<populations.length){
  percentages3.push(percentageOfWorld1(populations[i]));
}
console.log(percentages3);