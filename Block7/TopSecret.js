// Goal: You are building a vault that requires three mathematical calculations to generate the three codes in a combination.

// create & declare three variables ( Each variable will be the result of each calculation results 10 - 40 - 39)
//must be three different operators
const code1= 5*2
const code2= 80/2
const code3= 20+19

//create string variable
let message= "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "

//create alert displaying the vault codes and the text
//there are many ways to do so, but i will keep it simple and add them to one alert & concatenate 
alert(message + code1 + "-"+ code2 + "-" + code3)

//use css make it a bit presentable