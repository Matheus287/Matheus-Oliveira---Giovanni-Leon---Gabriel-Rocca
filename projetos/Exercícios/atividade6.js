const secretNumber = Math.floor(Math.random() * 10) + 1;
        
function checkGuess() {

    const guess = parseInt(document.getElementById('guess').value);
    const messageElement = document.getElementById('message');

    if (guess === secretNumber) {
        messageElement.textContent = 'Parabéns! Você acertou o número!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Tente novamente!';
        messageElement.style.color = 'red';
    }
}