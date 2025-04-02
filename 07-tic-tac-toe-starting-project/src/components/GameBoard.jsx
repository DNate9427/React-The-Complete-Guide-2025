import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    
    // Update Object-State Immutability
    // Objects and arrays (which are objects, technically) are reference values.
    // You should NOT mutate them directly - instead create a (deep) copy first

    // This would update the old value in memory immediately - before the schedule state update is executed by React:
    // previousGameBoard[rowIndex][columnIndex] = 'X';
    function handlePlayerMove(rowIndex, columnIndex) {
        setGameBoard((previousGameBoard) => {
            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];

            updatedBoard[rowIndex][columnIndex] = 'X';
            return updatedBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, columnIndex) => (
                            <li key={columnIndex}>
                                <button onClick={() => handlePlayerMove(rowIndex, columnIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}