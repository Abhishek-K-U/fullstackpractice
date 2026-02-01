let maxNum = parseInt(prompt("Enter the maximum number: "));

while(!maxNum){
    maxNum = parseInt(prompt("Please enter a valid maximum number: "));
}
let tarRandom = Math.floor(Math.random()*maxNum)+1;
let guess = prompt("Enter your guess: ");
let attempts = 0;

while(parseInt(guess) !== tarRandom){
    if(guess === 'q') break;
     attempts++;
    if(guess < tarRandom){
        guess = prompt("Too low! Try again: ");
    } else if(guess > tarRandom){
        guess = prompt("Too high! Try again: ");
    }else{
        guess = prompt("Invalid input! Please enter a number or 'q' to quit: ");
    }
}
if(guess === 'q') {
    alert("You quit the game. The number was: " + tarRandom);
}
else{
alert("Congratulations! You've guessed the number: " + tarRandom + " in " + attempts + " attempts.");
}

