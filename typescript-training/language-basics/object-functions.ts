//declare object with interface

interface empInfo {
    "firstName" : string;
    "lastName" : string;
    "age" : number;
    "email"? : string;
    "address" : {
        "country" : string;
        "state" : string;
        "city" : string;
    }

}

//add data into object with interface

let empDetails : empInfo = {
    "firstName" : "Gaurav",
    "lastName" : "Kumar",
    "age" : 35,
    "address" : {
        "country" : "India",
        "state" : "Haryana",
        "city" : "Gurgaon",

    }
}

console.log(empDetails);

// 2. Accessing Object Properties

console.log(empDetails.firstName);
console.log(empDetails.age);
console.log(empDetails["address"]["city"]);

// 3. Adding or Modifying Properties

empDetails.email = "gauravkakar009@gmail.com";
empDetails["age"] = 100;
console.log(empDetails);

// 4. Deleting Properties

delete empDetails.email;
console.log(empDetails);

// 5. Checking if a Property Exists

console.log("age" in empDetails);
console.log("country" in empDetails.address);

// 6. Getting Object Keys

console.log(Object.keys(empDetails));
console.log(Object.keys(empDetails.address));

// 7. Getting Object Values

console.log(Object.values(empDetails));
console.log(Object.values(empDetails.address));

// 8.  Getting Object Entries

console.log(Object.entries(empDetails));
console.log(Object.entries(empDetails.address));

// 9. Checking Object Type

console.log(typeof empDetails);
console.log(typeof empDetails.age);


// 10. Merging Objects

interface empInfo1 {
    "occupation" : string,
    "hobbies" : string[],
}

let additionalInfo : empInfo1 = {
    "occupation" : "Tester",
    "hobbies" : ["Cricket", "bedminton" ] 
}

let mergedDetails = {...additionalInfo, ...empDetails};
console.log(mergedDetails);

// 11. Iterating all Properties of object

for(let key in empDetails){

    console.log(key, empDetails[key as keyof empInfo]);
}