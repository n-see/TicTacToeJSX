import React, { useState } from 'react'
import Board from './Board'

const Game = () => {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    const handlePlay = (nextSquares) => {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

 
    const moves = history.map((squares, move) => {
        let description;
        if (moves > 0){
            description = 'Go to move # ' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    function jumpTo(nextmove) {

    }


    return (
        <>
            <div className="game">
                <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </>
    )
}

export default Game