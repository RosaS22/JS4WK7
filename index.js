

//Create an array called ages that contains the following values: 
//3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array 
//from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
//Add a new age to your array and repeat the step above to ensure it is dynamic. 
//(works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

const lastIndex = ages.length - 1;
const lastIndexTwo = ages.length - 8;
const difference = ages[lastIndex] - ages[lastIndexTwo];
console.log(difference);

let newAge = 42;
ages.push(newAge);

const newLastIndex = ages.length - 1;
const newLastIndexTwo = ages.length - 8;
const newDifference = ages[newLastIndex] - ages[newLastIndexTwo];
console.log(newDifference);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
const average = sum / ages.length;
console.log(average);

//Create an array called names that contains the following
//values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average 
//number of letters per name.
//Use a loop to iterate through the array again and concatenate all the 
//names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

let letters = 0;
for (let i = 0; i < names.length; i++)  {
  letters = letters + names[i].length;
  averageLettersPerName = letters / names.length;
}
console.log(averageLettersPerName);

let concatenatedNames = " ";
for (let i = 0; i < names.length; i++) {
  concatenatedNames = concatenatedNames + " " + names[i];
}
console.log(concatenatedNames);

//How do you access the last element of any array?
//array.length - 1

//How do you access the first element of any array?
// array[0]

//Create a new array called nameLengths. Write a loop to iterate over the previously 
//created names array and add the length of each name to the nameLengths array.

let namesLength = [];
for (let i = 0; i < names.length; i++)  {
  namesLength.push(names[i].length);
}
console.log(namesLength);

//Write a loop to iterate over the
//nameLengths array and calculate the sum of all the elements in the array.
let sumNames = 0
for (let i = 0; i < namesLength.length; i++) {
  sumNames += namesLength[i];
}

console.log(sumNames);

//Write a function that takes two parameters, word and n, as arguments and 
//returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 
//'HelloHelloHello').

function myGreeting (word, n){
  let myGreeting = '';
  for (let i = 0; i < n; i++) {
    myGreeting += word;
}
return myGreeting;
}

const result = myGreeting('Hello', 3);
console.log(result);

//Write a function that takes two parameters, firstName and lastName, and returns a 
//full name. 
//The full name should be the first and the last name separated by a space.


function fullName (firstName, lastName) {
return firstName + ' ' + lastName;
}
console.log(fullName("Bob", "Martins"));

//Write a function that takes an array of numbers and returns true 
//if the sum of all the numbers in the array is greater than 100.

function sumOfMyNumbers(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum > 100;

}

const numbersArray2 = [10, 60, 95];
const numbersArray3 = [0, 95];
console.log(sumOfMyNumbers(numbersArray2));
console.log(sumOfMyNumbers(numbersArray3));

//Write a function that takes an array of numbers 
//and returns the average of all the elements in the array.



function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
  return sum / arr.length;
}
const arr = [3, 5, 6, 9];
console.log(findAverage(arr));


//Write a function that takes two arrays of numbers and returns true if the average of
// the elements in the first array is greater than the average of the elements in the second array.

function firstArrayGreater(array1, array2) {
  const averageArray1 = calculateAverage(array1);
  const averageArray2 = calculateAverage(array2);
  
  return averageArray1 > averageArray2;
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
      return 0;
  }
  
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  
  return sum / numbers.length;
}

const array1 = [10, 20, 30, 40, 50];
const array2 = [5, 15, 25, 35, 45];
const result3 = firstArrayGreater(array1, array2);
console.log(result3);

//Write a function called willBuyDrink that takes a 
//boolean isHotOutside, and a number moneyInPocket, and 
//returns true if it is hot outside and if moneyInPocket 
//is greater than 10.50.


function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}

console.log(willBuyDrink(true, 15));

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function createPartyPack(meat, sides, bread) {
    return {
        meat: meat,
        sides: sides,
        bread: bread
    };
}

const myPartyPack = createPartyPack("Brisket", ["Mac n Cheese", "BBQ Baked Beans"], "Cornbread");
console.log(myPartyPack);
