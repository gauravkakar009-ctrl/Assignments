const paragraph : string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
const word : string = "Java";
let splittedParagraph : string[] = paragraph.split(" ");
console.log(splittedParagraph);

let count : number = 0;
let indexes : number[] = [];

let index : number = splittedParagraph.indexOf(word);

while(index !== -1){
    count++;
    indexes.push(index);

    index = splittedParagraph.indexOf(word, index + word.length);
}

console.log("Total Occurrences:", count);
console.log("Indexes:", indexes);



