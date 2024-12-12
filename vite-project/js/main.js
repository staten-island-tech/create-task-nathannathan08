
function flipCoin(guess) {
    
    let betAmount = parseFloat(document.getElementById("betAmount").value);
    let resultMessage = "";

    if (isNaN(betAmount) || betAmount <= 0) {
        alert("Please enter a valid bet amount.");
        return;
    }
    
    let flipResult = Math.random() < 0.5 ? 'heads' : 'tails';
    
    
    if (guess === flipResult) {
        resultMessage = `You guessed ${guess}, and the coin landed on ${flipResult}. You can't stop winning!!!! You won $${betAmount}!`;
    } else {
        resultMessage = `You guessed ${guess}, but the coin landed on ${flipResult}. Aw dangit! You lost $${betAmount}.`;
    }

    document.getElementById("result").insertAdjacentHTML('beforeend', resultMessage);
}

document.getElementById('headsButton').addEventListener('click', () => {
    flipCoin('heads');
});

document.getElementById('tailsButton').addEventListener('click', () => {
    flipCoin('tails');
});