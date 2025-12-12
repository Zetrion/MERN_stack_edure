// Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function calcAverage to calculate the average of 3 scores.
// This function should have three parameters and return a single number (the
// average score).
// 2. Create two new variables — scoreDolphins and scoreKoalas, and assign the
// value returned from the calcAverage function to them (you will need to call
// this function, and pass scores as arguments).
// 3. Create a function checkWinner that takes the average score of each team as
// parameters (avgDolphins and avgKoalas), and then logs the winner to the
// console, together with the victory points, according to the rule above.
// Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of
// hard-coded values).
// 4. Use the checkWinner function to determine the winner for both DATA
// 1 and DATA 2.
// 5. Ignore draws this time. Instead, log No team wins... to the console if there is
// no winner.
// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return 'No team wins...';
    }
};
const dolphinsAvg1 = calcAverage(44, 23, 71);
const koalasAvg1 = calcAverage(65, 54, 49);
console.log('Test Data 1:', checkWinner(dolphinsAvg1, koalasAvg1));

const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);
console.log('Test Data 2:', checkWinner(dolphinsAvg2, koalasAvg2)); 

// Coding Challenge #6
// Steven wants you to improve his tip calculator, using the same rules as before — tip
// 15% of the bill if the bill value is between 50 and 300, and if the value is different, the
// tip is 20%.
// Your tasks:
// 1. Write a function calcTip that takes any bill value as an input and returns the
// corresponding tip, calculated based on the rules above (you can check out the
// code from the first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So, create an array called bills containing the test
// data below.
// 3. Create an array called tips containing the tip value for each bill, calculated
// from the function you created before.
// 4. BONUS: Create an array totals containing the total values, so the bill + tip.
// TEST DATA: 125, 555, and 44.
// Hint: Remember that an array needs a value in each position, and that value can actually
// be the returned value of a function! So you can just call a function as array values (so don't
// store the tip values in separate variables first, but right in the new array) �

let ct=function calcTip(bill){
    let tip=(bill>=50 && bill<=300 ? bill*0.15: bill*0.2);
    return tip;
}
console.log(ct(100));
let bills=[125, 555,44];
let tips=[ct(bills[0]),ct(bills[1]),ct(bills[2])];
let totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(tips,totals);

// Coding Challenge #7
// Let's go back to Mark and John comparing their BMIs!
// This time, let's use objects to implement the calculations! Remember: BMI = mass /
// (height * height) (mass in kg and height in meters).
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass,
// and height (Mark Miller and John Smith). Name these objects
// as mark and john, and their properties exactly as fullName, mass and height.
// 2. Create a calcBMI method on each object to calculate the BMI (the same
// method on both objects). Assign the BMI value to a property, and also return it
// from the method.
// 3. Log to the console who has the higher BMI, together with the full name and
// the respective BMI. Example: "John Smith's BMI (28.3) is higher than
// Mark Miller's (23.9)!".
// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m
// tall.

let mark={
    fullname:'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI: function(){
        return this.mass/(this.height*this.height)
    }
}

let john={
    fullname:'John Smith',
    mass:92,
    height:1.95,
    calcBMI: function(){
        return this.mass/(this.height*this.height)
    }
}
console.log((mark.calcBMI()>john.calcBMI()) ? `John Smith's BMI ${john.calcBMI()} is higher than Mark Miller's ${mark.calcBMI()}!` : `Mark Miller's BMI ${mark.calcBMI()} is higher than John Smith's ${john.calcBMI()}!`);

// Coding Challenge #8
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array called bills containing all 10 test bill values.
// 2. Create empty arrays for the tips and the totals (tips and totals)
// 3. Use the calcTip function we wrote before (included in the starter code) to
// calculate tips and total values (bill + tip) for every bill value in
// the bills array. Use a for loop to perform the 10 calculations!
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
// BONUS:
// Write a function calcAverage which takes an array called arr as an argument. This
// function calculates the average of all numbers in the given array. This is
// a DIFFICULT challenge! Here is how to solve it if you feel like it:
// 1. First, you will need to add up all values in the array. To do the addition, start by
// creating a variable sum that starts at 0. Then loop over the array using a for
// loop. In each iteration, add the current value to the sum variable. This way, by
// the end of the loop, you have all values added together.
// 2. To calculate the average, divide the sum you calculated before by the length of
// the array (because that's the number of elements).
// 3. Call the function with the totals array.

let billz=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tipz=[];
let totalz=[];
for(i=0;i<billz.length;i++){
    tipz.push(ct(billz[i]));
    totalz.push(billz[i]+tipz[i]);
}
console.log(tipz,totalz);

ca=function(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log('Bills :'+ca(billz));
console.log('Tips :'+ca(tipz));
console.log('Totals :'+ca(totalz));

// Coding Challenge #9
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days
// ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string
// like the above to the console. Try it with both test datasets.
// Test data:
// • Data 1: [17, 21, 23]
// • Data 2: [12, 5, -5, 0, 4]

function printForecast(arr){
    for(i=0;i<arr.length;i++){
        console.log(`... ${arr[i]}° in ${i+1} days`)
    }
}
let Data1= [17, 21, 23];
let Data2= [12, 5, -5, 0, 4];
printForecast(Data1);
printForecast(Data2);

