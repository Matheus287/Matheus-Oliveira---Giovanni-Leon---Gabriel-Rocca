function encontrarMedia(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma / vetor.length;
}

function calcularMedia() {

    const quantidade = parseInt(document.getElementById('quantidade').value);
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira um número válido maior que zero.');
        return;
    }
    
    const numeros = [];
    for (let i = 0; i < quantidade; i++) {
        const valor = parseFloat(prompt(`Digite o número ${i + 1}:`));
        if (isNaN(valor)) {
            alert('Por favor, insira um número válido.');
            return;
        }
        numeros.push(valor);
    }

    const media = encontrarMedia(numeros);
    document.getElementById('resultado').innerText = `A média dos números é: ${media.toFixed(2)}`;
}