//Data types in TypeScript are divided into two major categories. 

//1. Primitive Data Types (Immutable data types) (meaning the original value won't change if we just perform some operation on top of that. )
//2. Non-Primitive Data Types (Mutable data types) (meaning the original value will change if we just perform some operation on top of that. )

//Syntax to store data in TypeScript :  declaration variable : datatype = data ;

/*********************************************/
/****************Primitive Datatypes**********/
/*********************************************/

//number => It can store numbers with decimals without decimals. 

let empId: number = 4321;
console.log(empId);

// string => The data type that can store text, characters, words, sentences, etc. It is always enclosed within single or double quotes or backticks.
let empName: string = "Bharath Reddy";
let empRole: string = 'Senior SDET';

//boolean => Boolean data type will be used to store the result of a condition in the form of true or false. 
let isRaining: boolean = true;

//undefined => Undefined represents a variable that has been declared but not assigned any value. 
let age: undefined;
console.log(age);

//null => Null represents a variable that has been declared and assigned a null value or empty value. 
let salary: null = null;
console.log(salary);

//union  => Union represents more than one data type that can be stored within the variable.
let empAddress : string | number | boolean;

empAddress = "Gurgaon";
empAddress = 122001;
empAddress = true;

//any => Any represents any data type that can be stored within the variable. Indirectly, we are removing the type safety. 

let empData: any;

empData = 1234;
empData = "Bharath";
empData = true;



/*********************************************/
/************Non-Primitive Datatypes**********/
/*********************************************/
// object => Object data type represents a collection of key-value pairs within the curly braces. 

//create template to store object
interface empInfo{
    "empName": String,
    "empId": number,
    "visaStatus": true,
    "address":{
        "city": string,
        "state": string,
    }

}

let empDetails : empInfo = {
    "empName": "Bharath",
    "empId": 1234,
    "visaStatus": true,
    "address": {
        "city": "Hyderabad",
        "state": "Telangana"
    }
}

console.log(empDetails)