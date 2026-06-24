//Debugging:- Debugging is the process of identifying and fixing the errors in the program.
console.log("Print 1")
console.log("Print 2")
sumOfNumbers(5,10)
div(200,5)
console.log("Print 3")
console.log("Print 4")


//Debugging the program step by step.

//1. Add the break points (before the line from where you want to manually execute the program)
// 2. Run the program in debug Mode.

//Continue (F5) => Continue the execution till next break point.
//Stop (Shift + F5) => Stop the execution of the program.
//Restart (Ctrl + Shift + F5) => Restart the execution of the program from beginning.
//Step Over (F10) => Execute the current line and move to next line.
//Step Into (F11) => Go inside the function. Check the internal code.
//Step Out (Shift + F11) => Come out of the function and move to next line.



//Logic to get the sum of two numbers.
function sumOfNumbers(a,b){
    c=a+b;
    console.log(c);
}

function div(a,b){
    c=a/b;
    console.log(c);

}

let empName = "Gaurav Kumar";
let empRole = '"Senior" SDET';
console.log(typeof empName);
console.log(typeof empRole);

//let empInfo = `emp name is ${empName} and emp role is ${empRole}`;
let empInfo = "emp name is:" +empName + " and emp role is:" +empRole;
console.log(empInfo);