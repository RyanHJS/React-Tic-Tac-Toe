import React, { useState } from 'react';
import Board from './Board';

const Game = () => {

    const [currentMove, setCurrentMove] = useState(0);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    // Jump to a specific move
    const jumpTo = (move) => {
        setCurrentMove(move);
    };

    const updateGame = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = "Go to move #" + move;
        }
        else {
            description = "Go to game start";
        }
        return (
            <li>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <>
            <div className="game">
                <div className='game-board'>
                    <Board squares={currentSquares} xIsNext={xIsNext} updateGame={updateGame} />
                </div>
                <div className='game-info'>
                    <ol>
                        {moves}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Game;