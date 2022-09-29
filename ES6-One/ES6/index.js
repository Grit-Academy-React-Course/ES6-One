/* x = 5;
var x;
console.log(x);
z = "let"
let z;
console.log(z); */

/* var x = 5;
var x = 6;
console.log(x);

let y = 5;
let y = 6; */

/* {
    var x = 5;
    let y = 6;
}
console.log(x);
console.log(y); */

/* const x = 5;
x = 4;
console.log(x); */

/* const numbers = [1, 2, 3];
//numbers = [2, 3, 4];
console.log(numbers);
numbers.push(4); // Add value to the end of the array
console.log(numbers);
numbers[0] = 100;
console.log(numbers);
numbers.pop(); // Remove the last value of the array
console.log(numbers);
numbers.unshift(5); // Add value at the begining of the array
console.log(numbers);
numbers.shift(0); // Remove value from at index 0
console.log(numbers); */

//Vanlig funktion där andra parameter "b" är 10 som en default value
/* function add(a, b = 10) {
    return a + b;
}
console.log(add(5, 5));
console.log(add(5));

const addFunction = function (a, b = 10) {
    return a + b;
}
console.log(addFunction(5));

//Samma add funktion ovan men i arrow style
const addArrow = (a, b) => {
    return a + b;
}
console.log(addArrow(50, 200));

const addArrowV2 = (a, b) => {
    console.log(a + b);
}
addArrowV2(1, 2)
// om funktionen innehåler bara en enda statment så går det att skriva hela funktionen i samma rad
const addArrowAgain = (a, b) => a + b;
console.log(addArrowAgain(50, 200));

// om funktionen tar bara en enda parameter så går det att ta bort parameters parentes
const multiplyArrowOnePara = a => a * a;
console.log(multiplyArrowOnePara(2));

// om funktionen tar bara en enda parameter men parametern har en default value så måste skriva det i parentes
const multiplyArrow = (a = 10) => a * a;
console.log(multiplyArrow(30));
console.log(multiplyArrow());
 */

/*
const cars = ["Volvo", "Saab", "Mazda", "Ford"]

//cars.forEach((value) => console.log(value));

//iterate over array value
for (const value of cars) {
   console.log(value);
}
//iterate over array index
for (const index in cars) {
   console.log(index);
} 

cars.forEach((value, index, cars) => console.log(value + index)); 
let allCars = "";
for (const item of cars) {
   //allCars += item + " ";
   allCars = allCars + item + " ";
}
console.log(allCars);
console.log(cars.join(" "));
*/

// Set is like array but can't have any duplicated values inside of it
/* let set = new Set();
set.add(1); // add() to add to a set
set.add(1);
set.add(1);
set.add(1);
set.add(1);
set.add(1);
set.add(12);
set.add(13);
set.add(14);
set.add(14);
console.log(set);
console.log(set.has(1)); // To check if an item exist inside the set
console.log(set.size); // To get the set size

const cars = ["Volvo", "Saab", "Mazda", "Ford", "Ford"]
console.log(cars);
let carsSet = new Set(cars); // Here the second "Ford" is removed since set doesnt allow duplicates
console.log(carsSet);
carsSet.delete("Saab"); // To remove an item
console.log(carsSet);
//carsSet.clear(); // To clear the set to 0 items 


//Array.from() used to convert an object to an array with the ability to a mpafuntion as in the second example below
let carsArrayFromSet = Array.from(carsSet); 
console.log(carsArrayFromSet);

let numbersArray = Array.from([1, 2, 3], (x) => x + x);
console.log(numbersArray);

let string = "Grit Academy";
let stringToArray = Array.from(string);
console.log(stringToArray);


let nrs = [1, 2, 3, 4, 5, 6];
let arrayToString = nrs.join(",");
console.log(arrayToString);
console.log(arrayToString.split(",")); */


//reduce() reutrns one value only
/* let nrs = [1, 2, 3, 77, 23, 47];
const resultReduce =
    nrs.reduce((total, currentValue, currenIndex) => total +
        (currentValue * currenIndex), 0);
console.log(resultReduce);
        
let strings = ["A","B","C","D"];
const resultReduceString =
strings.reduce((total, currentValue, currenIndex) => total +
        (currentValue + currenIndex), "");
console.log(resultReduceString); */


//Fill() fills all the array with whatever data. Has the ability to specifiy which index it should include
let nrs = [1, 2, 3, 77, 23, 47];
console.log(nrs);
nrs.fill("Grit", 2, 4);
console.log(nrs);


const letters = ["A", "B", "C", "D", "E", "F"];
const filterLetters = letters.filter((x) => x != "C"); // Filter removes data according to a condition
console.log(filterLetters);

//Slice() to get some data of the array depending on the start/end of index. Positive start index goes from left to right while negative from left to right
/* console.log(letters.slice(2));
console.log(letters.slice(2, 4));
console.log(letters.slice(-1)); // letters.pop()
console.log(letters.slice(-2, -4));
console.log(letters.slice(-2, 3)); 
console.log(letters.slice(2));
console.log(letters.slice());
console.log(letters.slice(2));
console.log(letters.slice(-3, -2));
console.log(letters.slice(undefined, -1));
//console.log(letters);
*/

// The new way to use promises when working with a async opertion
fetch("https://api.ipify.org/?format=json")
    .then((data) => data.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

