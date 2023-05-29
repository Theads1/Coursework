//generate random number and round it
const answer = Math.floor(Math.random() * 10 + 1);
//need guesses
let guesses = 0;
//select button to do something
document.getElementById("submitBtn").onclick = function () {
    //the something is
    //get value from textbox
    let guess = document.getElementById("guessField").value;
    //increment guesses by 1 to keep track
    guesses+=1;
    if (guess==answer){
        alert(`${answer} is the #, it took you ${guesses} guesses`);
    }
    else if (guess<answer){
        alert("Too Small");
    }
    else{
        alert("Too Big")
    }
}