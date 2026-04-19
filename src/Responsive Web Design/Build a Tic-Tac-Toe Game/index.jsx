const { useMemo, useState } = React;

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares) {
  for (const [a, b, c] of winningLines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const isDraw = useMemo(
    () => !winner && squares.every((square) => square !== null),
    [squares, winner]
  );

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? 'Draw'
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleSquareClick = (index) => {
    if (winner || isDraw || squares[index]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game">
      <header className="game-header">
        <div>
          <h1>Tic-Tac-Toe</h1>
          <p>Play with clean, responsive design.</p>
        </div>
        <button id="reset" className="reset" onClick={handleReset}>
          Reset
        </button>
      </header>

      <div className="status" role="status" aria-live="polite">
        {status}
      </div>

      <div className="board" role="grid">
        {squares.map((value, index) => (
          <button
            key={`square-${index}`}
            className="square"
            onClick={() => handleSquareClick(index)}
            role="gridcell"
            aria-label={`Square ${index + 1}`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}
