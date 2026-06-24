// Data type Boolean.

let doYouHavePassport = true;
console.log(typeof doYouHavePassport);
console.log(doYouHavePassport);


// Data type null.

let empName = null;
console.log(empName);
console.log(typeof empName);

// Data type undefiend.

/* let age;
console.log(age); */

// Non-premitive data types
// Object

let detailsOfPerson = {

    "Name" : "Gaurav Kumar",
    "Age" : 32,
    "havingVisa" : true,
    "address" : [ {

        "city" : "Gurgaon",
        "state" : "Haryana",
        "country" : "India",
    }, {

        "city" : "Hisar",
        "state" : "HR",
        "country" : "Hindustan",
    }


    ]
}

console.log(detailsOfPerson.Age);
console.log(detailsOfPerson.Name);
//console.log(detailsOfPerson.address);
console.log(detailsOfPerson.address.country); // Not working
console.log(detailsOfPerson.address[1].city);

console.log(detailsOfPerson["address"]["country"]); // Not working

// Array => Array is nothing but a list of values in javascript.

let fruits = ["Apple", "Mango", "Banana", "Grapes"];
console.log(fruits.length);
console.log(fruits[2]);

let fruitsAndPrice = ["Apple", 300, "Mango", 100, "Banana", 70, "Grapes", 200];
console.log(fruitsAndPrice.length);
console.log(fruitsAndPrice[3]);
