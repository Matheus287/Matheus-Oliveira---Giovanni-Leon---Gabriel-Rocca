function verificarNumero() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    
    const numero = parseFloat(input);
    if (isNaN(numero)) {
        resultDiv.textContent = 'Por favor, insira um número válido.';
        return;
    }

    if (numero > 0) {
        resultDiv.textContent = 'O número é positivo.';
    } else if (numero < 0) {
        resultDiv.textContent = 'O número é negativo.';
    } else {
        resultDiv.textContent = 'O número é neutro.';
    }
}