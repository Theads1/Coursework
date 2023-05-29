let count=0;
document.getElementById("decreaseBtn").onclick=function(){
count-=1;
document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("resetBtn").onclick=function(){
    count=0;
    document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("increaseBtn").onclick=function(){
    count+=1;
document.getElementById("countLabel").innerHTML=count;
}

// if else statement with tenary

let adult= checkAge(21)
function checkAge(age){
    if (age>= 18){
        return true;
    }
    else{
        return false;
    }
}

// or

function checkAge(age){
    return age >= 18 ? true : false
    //condition ? return if true : vs if false
}