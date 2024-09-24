let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Colunas
    [0, 4, 8], [2, 4, 6]              // Diagonais
];

// Função para fazer um movimento
function makeMove(index) {
    if (board[index] === "" && isGameActive) {
        board[index] = currentPlayer;
        document.getElementById(`cell-${index}`).textContent = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === "X" ? "O" : "X";  // Alterna jogador
    }
}

// Função para verificar o resultado
function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winCombinations.length; i++) {
        const winCombo = winCombinations[i];
        const a = board[winCombo[0]];
        const b = board[winCombo[1]];
        const c = board[winCombo[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        document.getElementById('status').textContent = `Jogador ${currentPlayer} venceu!`;
        isGameActive = false;
        return;
    }

    if (!board.includes("")) {
        document.getElementById('status').textContent = "Empate!";
        isGameActive = false;
        return;
    }

    document.getElementById('status').textContent = `Vez do jogador ${currentPlayer}`;
}

// Função para reiniciar o jogo
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    currentPlayer = "X";
    document.getElementById('status').textContent = `Vez do jogador ${currentPlayer}`;
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).textContent = "";
    }
}
