// Creating an Object template to store

interface employee{
    "name" : string;
    "baseSalary" : number;
    "experience" : number;
    "rating" : number;
}

const employees : Map<string, employee> = new Map();
employees.set("Alice Johnson" , {name : "Alice Johnson", baseSalary : 75000, experience : 5.1, rating : 4.2});
employees.set("Bob Smith" , {name : "Bob Smith", baseSalary : 68000, experience : 3.2, rating : 3.8});
employees.set("Carol Davis" , {name : "Carol Davis", baseSalary : 82000, experience : 7.1, rating : 4.5});
employees.set("David Brown" , {name : "David Brown", baseSalary : 90000, experience : 10.2, rating : 2.5});
employees.set("Eva Green" , {name : "Eva Green", baseSalary : 60000, experience : 2.4, rating : 3.5});

const hikeMap : Map<string, number> = new Map();

for (const [name, emp] of employees) {

let variablePayPercent : number = 0;
let bonus = 0;

if(emp.rating >= 4.0){
    variablePayPercent = 15;
    bonus = 1500;
}else if(emp.rating >= 3.0){
    variablePayPercent = 10;
    bonus = 1200;
}else{
    variablePayPercent = 3.0;
    bonus = 300;
}

let reward : number = 0;
if(emp.experience >= 5.0){
    reward = 5000;
}

const hike : number = ( emp.baseSalary * variablePayPercent )/100 + bonus + reward ;
const hikePercentage = (hike / emp.baseSalary)*100;

hikeMap.set(name, hikePercentage);
}

for (const [name, hikePercentage] of hikeMap){
    console.log(`Name of Employee ${name} and Hike Percentage is ${hikePercentage.toFixed(2)}`);
}


