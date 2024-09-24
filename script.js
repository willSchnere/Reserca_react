function checkSpeed() {
    // Obtém o valor da velocidade inserido pelo usuário
    let speed = document.getElementById('speed').value;
    let result = document.getElementById('result');

    // Limpa a mensagem de resultado anterior
    result.textContent = '';

    if (speed > 80 && speed <= 120) {
        // Multa por infração média
        result.textContent = 'Infração média: Multa aplicada pela velocidade de ' + speed + ' km/h.';
    } else if (speed > 120) {
        // Multa por infração grave
        result.textContent = 'Infração grave: Multa severa aplicada pela velocidade de ' + speed + ' km/h.';
    } else if (speed <= 80 && speed >= 0) {
        // Velocidade dentro do limite permitido
        result.textContent = 'Velocidade dentro do limite permitido.';
    } else {
        // Valor inválido (ex: números negativos ou vazios)
        result.textContent = 'Por favor, insira uma velocidade válida.';
    }
}
