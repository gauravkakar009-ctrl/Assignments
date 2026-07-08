// Count the total number of words in the sentence.

let sentence : string  = "Java programming is fun and challenging";
let wordCount : number = sentence.split(" ").length;

console.log("Total words in this sentence is: " +wordCount);

// Print the sentence words in reverse order.

let reverseSentence : string[] = sentence.split(" ");
let sentenceReverseWords : string = "";

for(let i = reverseSentence.length-1; i >= 0; i--){
    sentenceReverseWords += (reverseSentence[i]+ " ");
}

console.log(sentenceReverseWords);


// Convert the first character of each word to uppercase and print original sentence.

let upperCaseWord : string[] = sentence.split(" ");
let finalResult : string = "";

for(let i = 0; i < upperCaseWord.length; i++){

    finalResult += upperCaseWord[i].charAt(0).toUpperCase() + upperCaseWord[i].slice(1) + " ";
}

console.log(finalResult);