import React, { useState } from 'react'
import Board from './Board'

const Game = () => {

    const [currentMove, setCurrentMove] = useState(0);
    const [square, setSquare] = useState(Array(9).fill(null));
    const xIsNext = currentMove % 2 === 0;

    return (
        <div>
            <Board square={square} xIsNext={xIsNext} currentMove={currentMove} setCurrentMove={setCurrentMove} />
        </div>
    )
}

export default Game