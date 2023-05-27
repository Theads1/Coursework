//formula= c= srt(a2+b2) (2=squared)


// create variables
let a;
let b;
let c;

//allow a and b to take user input
a= window.prompt("Enter side A");
a=Number(a)
//need number or it wont take in a number...only a string
b= window.prompt("Enter side B");
b=Number(b)

// c= Math.pow(a,2)+ Math.pow(b,2);
// c= Math.sqrt(c);
c= Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
console.log(c);