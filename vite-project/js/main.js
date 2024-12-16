
let balance = 2000;
let wins = 0;
let losses = 0;
function flipCoin(guess) {
    
    let betAmount = parseFloat(document.getElementById("betAmount").value);
    let resultMessage = "";

    if (isNaN(betAmount) || betAmount <= 0) {
        alert("You can't bet zero dollars.");
        return;
    }
    
  document.getElementById("result").innerHTML = "";

    let flipResult = Math.random() < 0.5 ? 'heads' : 'tails';
    
    
    if (guess === flipResult) {
        resultMessage = `You guessed ${guess}, and the coin landed on ${flipResult}. You can't stop winning!!!! You won $${betAmount}!`;
        balance += betAmount;
        wins++;

    } else {
        resultMessage = `You guessed ${guess}, but the coin landed on ${flipResult}. Aw dangit! You lost $${betAmount}.`;
        balance -= betAmount;
        losses++;
    }

    document.getElementById("result").insertAdjacentHTML('beforeend', resultMessage); 
    document.getElementById("balance").innerHTML = balance.toFixed(2); 
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
}

document.getElementById("balance").innerHTML = balance.toFixed(2);
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

document.getElementById('headsButton').addEventListener('click', () => {
    flipCoin('heads');
});

document.getElementById('tailsButton').addEventListener('click', () => {
    flipCoin('tails');
});
