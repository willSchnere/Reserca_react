let numbers = [];

// Função para adicionar número
function addNumber() {
    let number = document.getElementById('newNumber').value;
    if (number) {
        numbers.push(number);  // Adiciona o número ao array
        updateList();  // Atualiza a exibição
    }
}

// Função para remover o último número
function removeNumber() {
    numbers.pop();  // Remove o último número do array
    updateList();  // Atualiza a exibição
}

// Função para atualizar a lista no HTML
function updateList() {
    let list = document.getElementById('numberList');
    list.innerHTML = '';  // Limpa a lista
    numbers.forEach(num => {
        let li = document.createElement('li');
        li.textContent = num;
        list.appendChild(li);
    });
}
