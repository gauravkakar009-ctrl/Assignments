// 1. Create an array:

let fruits : string[] = ["apple", "banana", "mango"];
let prices : number[] = [100, 200, 500, 300];
let fruitsAndprices : (string | number)[] = ["apple", 100, "banana", 200, "mango", 300]

// 2. Accessing Elements

console.log(fruits);
console.log(fruits[2]);
console.log(fruitsAndprices);
console.log(fruits.length);

// 3. Adding Elements to the End

fruits.push("Orange");
prices.push(500);
fruitsAndprices.push("Orange", 500);

console.log(fruits);
console.log(prices);
console.log(fruitsAndprices);

// 4. Removing Elements from the End

fruits.pop();
prices.pop();
fruitsAndprices.pop();

console.log(fruits);
console.log(prices);
console.log(fruitsAndprices);

// 5. Adding Elements to the Beginning

fruits.unshift("Orange", "Papaya", "Grapes");
prices.unshift(500);
fruitsAndprices.unshift("Orange", 500);

console.log(fruits);
console.log(prices);
console.log(fruitsAndprices);

// 6. Removing Elements from the Beginning


fruits.shift();
prices.shift();
fruitsAndprices.shift();

console.log(fruits);
console.log(prices);
console.log(fruitsAndprices);

// 7. Adding and removing additional values to the existing array at specific index
// Syntax: arrayName.splice(index, No-of-values-to-be-deleted, values-to-be-added);
fruits.splice(2, 0, "Apple");
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

// 8. Create a new array by extracting the part of the values from existing array.
// Syntax: arrayName.slice(starting-index, ending-index+1);

let newFruits : string[] = fruits.slice(1, 4);
console.log(newFruits);

// 9. Create a new array by merging existing arrays

let veggies : string[] = ["Carrot", "Potato", "Tomato"];
let fruitsAndveggies : string[] = fruits.concat(veggies);
console.log(fruitsAndveggies);

// 10. Find the index of a specific value within the Array

let index : number = fruitsAndveggies.indexOf("Tomato");
console.log(index);


// 11. Iterate all the values of array

for(let fruit of fruitsAndveggies){
    console.log(fruit);
}

// 12. Reverse the values within the array

fruitsAndveggies.reverse();
console.log(fruitsAndveggies);

for(let i:number=fruitsAndveggies.length-1; i>=0; i--){

    console.log(fruitsAndveggies[i]);
}

// 13. Sort the arrays in ascending order

fruits.sort();
console.log(fruits);
fruitsAndveggies.sort();
console.log(fruitsAndveggies);

prices.sort((a,b)=>b-a); // descending order
console.log(prices);




