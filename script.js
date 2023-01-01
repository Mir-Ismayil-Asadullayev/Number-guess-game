let inputNumber = document.getElementById("number");
let button = document.getElementById("button");
let output = document.getElementById("output");
let counter = 0;


button.addEventListener("click", () => {
    counter++;
    output.style.backgroundColor = "white";
    let value = inputNumber.value.trim();

    let randomNumber = Math.ceil(Math.random() * 15);
    console.log(randomNumber);
    console.log(value);

    if (value > 15 || value < 1) {
        return output.innerText = "Please enter valid number digits, between 1 - 15!";
    }

    if (isNaN(value) || value == "") {
        return output.innerText = "Please enter only number digits, and don't leave empty space!";
    }

    if (value == randomNumber) {
        return output.innerText = "Congratulations Guessed number" + " " + randomNumber + " " + "is correct!" + "    " + "Number of guesses" + "  " + counter;
    }

    if (randomNumber > value) {
        return output.innerText = "Guessed number is lower than actual number!";
    }

    if (randomNumber < value) {
        return output.innerText = "Guessed number is higher than actual number!";
    }
})
