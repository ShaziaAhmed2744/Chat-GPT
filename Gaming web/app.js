const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');
let currentPlayer = 'red';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningMessage = () => `Congratulations! ${currentPlayer.toUpperCase()} Wins!`;
const drawMessage = () => "It's a Draw!";
const currentPlayerTurn = () => `It's ${currentPlayer.toUpperCase()}'s turn`;

message.innerText = currentPlayerTurn();

const handleCellClick = (e) => {
	const cell = e.target;
	const cellIndex = parseInt(cell.id) - 1;

	if (gameState[cellIndex] !== '' || !gameActive) {
		return;
	}

	gameState[cellIndex] = currentPlayer;
	cell.classList.add(currentPlayer);

	checkWin();
	checkDraw();
	changePlayer();
};

const checkWin = () => {
	const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8
