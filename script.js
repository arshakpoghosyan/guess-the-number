let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = [Math.floor(Math.random() * 10)]

btn.addEventListener("click", function(){
    let input = document.getElementById("userinput").value;
    if(input == number){
        output.innerHTML = `You guessed right, your numbar was ${number}, please refresh the page to play again`
        output.style.color = "green";
    } else if(input < number){
        output.innerHTML = `You guessed too low`
    };
    if(input > number){
        output.innerHTML = `You guessed too high`
    }
    if(input > 10){
        output.innerHTML = `You guessed number above 10`
        output.style.color = "red";
    }
    if(input < 1){
        output.innerHTML = `You guessed number low than 1`
        output.style.color = "red";
    }
    if (isNaN(input)){
        output.innerHTML = `Must input numbers`
        output.style.color = "red";
    }
    if (!input){
        output.innerHTML = `Please enter number`
        output.style.color = "red";
    }

})