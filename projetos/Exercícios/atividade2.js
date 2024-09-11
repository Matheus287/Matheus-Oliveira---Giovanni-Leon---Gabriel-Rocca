function classifyAge() {
    var age = document.getElementById('age').value;
    var message = '';

    if (age === '') {
        message = 'Por favor, digite uma idade.';
    } else if (age >= 0 && age <= 12) {
        message = 'Você é uma criança.';
    } else if (age >= 13 && age <= 17) {
        message = 'Você é um adolescente.';
    } else if (age >= 18 && age <= 64) {
        message = 'Você é um adulto.';
    } else if (age >= 65) {
        message = 'Você é um idoso.';
    } else {
        message = 'Idade inválida.';
    }

    document.getElementById('message').innerText = message;
}