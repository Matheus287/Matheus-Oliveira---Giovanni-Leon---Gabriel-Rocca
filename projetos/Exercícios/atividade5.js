function calcularSoma() {
    let soma = 0;
    let numero;

    do {
        numero = parseInt(prompt("Digite um número inteiro (digite 0 para finalizar):"), 10);
        
        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por favor, insira um número inteiro válido.");
        }
    } while (numero !== 0);

    alert("A soma de todos os números inseridos é: " + soma);
}