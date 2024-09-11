function filtrarNumeros(vetor, valor) {
    return vetor.filter(num => num > valor);
}

function processarDados() {

    const inputNumeros = document.getElementById('numeros').value;
    const vetor = inputNumeros.split(',').map(num => parseFloat(num.trim()));

    const valorReferencia = parseFloat(document.getElementById('valorReferencia').value);

    if (vetor.some(isNaN) || isNaN(valorReferencia)) {
        alert('Por favor, insira apenas números válidos.');
        return;
    }

    const vetorFiltrado = filtrarNumeros(vetor, valorReferencia);
    document.getElementById('resultado').innerText = `Números maiores que ${valorReferencia}: ${vetorFiltrado.join(', ')}`;
}