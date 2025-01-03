import '../css/style.css';
    
let balance = 2000;           //sets the balance u start with as 2000
let wins = 0;
let losses = 0;
function flipCoin(guess) {
    
    let betAmount = parseFloat(document.getElementById("betAmount").value);
    let resultMessage = "";

    if (isNaN(betAmount) || betAmount <= 0) {
        alert("You can't bet zero dollars.");
        return;
    }        //detects if bet amount is less than or equal to 0 and alerts the user if it is
    
  document.getElementById("result").innerHTML = "";

    let flipResult = Math.random() < 0.5 ? 'heads' : 'tails';    //gives two options w a 0.5/1 chance 4 both
    
    
    if (guess === flipResult) {
        resultMessage = `You guessed ${guess}, and the coin landed on ${flipResult}! You can't stop winning!!!! You won $${betAmount}!`;
        document.getElementById("result").classList.add('win-message');    
        balance += betAmount;
        wins++;

    } else {
        resultMessage = `You guessed ${guess}, but the coin landed on ${flipResult}. Aw dangit! You lost $${betAmount}.`;
        document.getElementById("result").classList.add('lose-message');  
        balance -= betAmount;
        losses++;
                
    }

    document.getElementById("result").insertAdjacentHTML('beforeend', resultMessage); 
    document.getElementById("balance").innerHTML = balance.toFixed(2); 
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;    //updates
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
document.getElementById('ninetybetButton').addEventListener('click', () => {
    let bet90 = (balance * 0.90).toFixed(2); 
    document.getElementById('betAmount').value = bet90; 
});         //multiples balance by 0.9, giving u 90% of the bet then inputs it into the betting bar