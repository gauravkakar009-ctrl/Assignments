//Functions : A function is a block of code or a collection of statements written together to complete a specific task. 

// In TypeScript, there are mainly three different types of functions available. 

//1. Named functions
//2. Anonymous functions
//3. Arrow functions

//1. Named Functions => The functions declared with some name 

//Syntax:
// function functionName(parameters: type): returnType {
//     // function body
// }

// Example
function sum(a: number, b: number): number {
    return a + b;

}

// Calling the function
console.log(sum(10, 20));

//2. Arrow functions or lambda functions => The function is declared without any name, and the implementation will be added after the arrow.

//Syntax :
//(parameters) => { Implementation }

let add = (a: number, b: number) => a + b;

//calling the arrow function
console.log(add(20, 30));

//3. Anonymous function => The functions declared without any name , Anonymous functions will be used to create a function with a function as a parameter. 

//normal function with number as parameter
function square(num: number): void {
    console.log(num * num);
}

//calling the anonymous function
square(7);


//function with function as parameter
// function functionName ( function) {
//     //use function as parameter
// }


// function with function as parameter
function calculate(cube: (x: number) => number): void {
    console.log(cube(3));
}

// calling the function

calculate(
    (a: number): number => {
    return a * a * a;
}
);


function calculate1(abc: (x: string) => void): void {
    abc("Gaurav");
}

//calling the function
calculate1(
    (a: string): void => {
        console.log("Hello " + a);
    }
);
