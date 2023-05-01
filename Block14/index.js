//ONLY ODDS
const input = [2, 4, 6, 8, 10, 11, 12]
const result = []
// loop over each element 
for (let i = 0; i < input.length; i++) {
   // evaluate each element => is this odd?
   if (input[i] % 2 === 1) {
   // once you have the odd element, add it to your answer  
    result.push(input[i])
    //console log the result 
   } else {
//      // if it's even, don't even worry about it. 
    continue;
   }
}
console.log(result)
//test all


//VOWEL VS CONSONANT
let inputs = "textbook";
let consonants = [];
let vowels = [];
//create for...of loop
for (let letter of inputs) {
    if (["a", "e", "i", "o", "u"].includes(letter)) {
        vowels.push(letter);
    } else {
        consonants.push(letter);
    }
}
//console log the results( be sure to add  ``)
console.log(`${inputs} has ${consonants.length} consonants and ${vowels.length} vowels`);
//test all


//REVERSE ARRAY
//loop
//create input variable and empty string
let input1 = [1, -1, 2, -3, 5, -8, 13]
let output1 = []
// //start while loop.. don't need if statement
for(let i = 0; i < input1.length; i++){
    //use unshift
    output1.unshift(input1[i]);
 }

 //console log output1
 console.log(output1)
//test all


 //FIZZBUZZ
 //create variables
 //start loop (while), i=0 and <100
 //start if with && condition
 let i = 0;

while (i <= 100) {
    //add % n===0 for 3 AND 5
    if (i % 3===0 && i % 5===0){
    console.log("Fizzbuzz");
    } 
    //% n===0 for 3
 else if (i % 3===0){
        console.log("Fizz")
    }
    //% n===0 for 5
    else if (i % 5===0){
        console.log("Buzz")
    }
    //if none, just print number
    else{
        console.log(i)
    }
    i++;
}
//test all
