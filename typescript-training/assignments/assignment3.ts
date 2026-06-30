// Student Names Array and print 0 index value.

let studentNames : string[] = ["Suresh", "Mahesh", "Naresh"];
console.log(studentNames[0]);

// Marks Array and print 2 index value.

let marks : number[] = [75, 80, 82];
console.log(marks[2]);

// By using for..of..loop add 10 marks and store it in new array

let updatedMarks : number[] = [];
for(let mark of marks){
    mark += 10;
    updatedMarks.push(mark);
}

let totalMarks : number = 0;
for (let mark of updatedMarks){
    totalMarks += mark;
}

let average : number = totalMarks/updatedMarks.length;

for(let i : number=0; i<studentNames.length; i++){
    console.log(`Updated marks: ${studentNames[i]}:  ${updatedMarks[i]}`);
    
}

console.log("Average marks: " + average);


