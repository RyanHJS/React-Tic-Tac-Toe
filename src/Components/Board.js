import React, { useState } from 'react'
import Square from './Square'

const Board = ({ square, xIsNext, currentMove, setCurrentMove }) => {

    const handleClick = (i) => {
        if (square[i] || calculateWinner(square)) {
            return
        }

        if (xIsNext) {
            square[i] = "X"
            setCurrentMove(currentMove + 1)
        }
        else {
            square[i] = "O"
            setCurrentMove(currentMove + 1)
        }
    }

    const calculateWinner = (square) => {

        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a];
            }
        }
        return null;
    }

    return (
        <>
            <div className="board-row">
                <Square value={square[0]} handleClick={() => handleClick(0)} />
                <Square value={square[1]} handleClick={() => handleClick(1)} />
                <Square value={square[2]} handleClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={square[3]} handleClick={() => handleClick(3)} />
                <Square value={square[4]} handleClick={() => handleClick(4)} />
                <Square value={square[5]} handleClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={square[6]} handleClick={() => handleClick(6)} />
                <Square value={square[7]} handleClick={() => handleClick(7)} />
                <Square value={square[8]} handleClick={() => handleClick(8)} />
            </div>

        </>
    )
}

export default Board