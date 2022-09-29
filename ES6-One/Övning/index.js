//Övning 1
const multiply = (a, b = 12) => a * b > 0
console.log(multiply(-5));

//Övning 2
//Alt - 1
const set = new Set();
const numbers = [1, 1, 3, 4, 5, 0, 2, 1, 2, 3, 6, 9, 9, 4, 0];
numbers.forEach((nr) => set.add(nr));
const convertedArray = Array.from(set);
const sortedArray = convertedArray.sort((a, b) => b - a);
console.log(sortedArray);

//Alt - 2
const set2 = new Set([1, 1, 3, 4, 5, 0, 2, 1, 2, 3, 6, 9, 9, 4, 0]);
console.log(Array.from(set2).sort((a, b) => b - a));



//Övning 3
const letters = ["a", "b", "c", "d", "e"];
const joinedArray = [];
let i = 0;
sortedArray.forEach((value, index) => {
    joinedArray[index] = value + letters[i];
    i++;
    if (i === letters.length) {
        i = 0;
    }
});
console.log(joinedArray);


//Övning 4
const reverseStrings = str => Array.from(str).reverse().join('');
console.log(reverseStrings("Grit Academy"));


//Övning 5
const isDivisible = (x, y) => x % y === 0;
console.log(isDivisible(10, 5));
console.log(isDivisible(11, 5));