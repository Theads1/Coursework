document.getElementById("submitBtn").onclick = function(){
    let temperature;
    //see if a button is selected
    if (document.getElementById("cBtn").checked){
    temperature = document.getElementById("textBox").value;
    temperature = Number(temperature);
    temperature = toCelsius(temperature);
    document.getElementById("tempLabel").innerHTML = temperature + "°C";
    }
    else if ( document.getElementById("fBtn").checked){
        temperature = document.getElementById("textBox").value;
        temperature = Number(temperature);
        temperature = toFahrenheit(temperature);
        document.getElementById("tempLabel").innerHTML = temperature + "°F";
        }
    
    
else{
        document.getElementById("tempLabel").innerHTML = "YOU GOTTA SELECT ONE!"
    }
}


function toCelsius(temp){
    return (temp-32)*(5/9);
}

function toFahrenheit(temp){
    return temp*9/5 + 32;
}