function calcularMaiorEMenor() {

    const numeros = [];
    for (let i = 1; i <= 5; i++) {
        const valor = parseInt(document.getElementById('num' + i).value);
        if (!isNaN(valor)) {
            numeros.push(valor);
        } else {
            alert('Por favor, insira um número válido.');
            return;
        }
    }

    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);

    document.getElementById('resultado').innerHTML = 
        `Maior número: ${maior}<br>Menor número: ${menor}`;
}