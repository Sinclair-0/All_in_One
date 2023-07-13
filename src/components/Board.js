import React, { useState } from 'react';
import {createBoard} from '../util/createBoard';
import {gameReducer} from '../reducers/gameReducer';
import Cell from './Cell';
import "../styles.css";
const SIZE = 10;
const MIMICS = Math.floor(SIZE * SIZE * .15);   //If I want to have the user input a size instead, make the mimics account for 15% of the tiles

export default function Board() {
    const [gameState, dispatch] = React.useReducer(gameReducer, {
        board: createBoard(SIZE, MIMICS),
        isGameOver: false,
    });
    function handleClick(row, col) {
        dispatch({type: "HANDLE_CELL", row, col});
    }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div class = "container">

            <button onClick={() => setIsOpen(true)} class = "popupbutton">
                Rules!
            </button>

            <div>
            {gameState.isGameOver ? "Game Over!" : "MimicSweeper"}
            </div>

            {isOpen && (
            <div class = "popup">
                <div>
                    <h3>
                        This is Mimicsweeper!
                    </h3>
                    <h5>
                        Mimicsweeper is played like Minesweeper. There are 15 mimics that, if clicked, is GAME OVER!
                        <br />
                        Each chest will tell you how many adjacent mimics there are (corners DO count!).
                        <br />
                        The top left chest is ALWAYS safe. Have fun!
                    </h5>
                    <button onClick={() => setIsOpen(false)} class = "popupbutton">
                    Lets Play!
                    </button>
                </div>

            </div>
            )}

            {gameState.board.map((row, rowIndex) => (
                <div key = {rowIndex} class = "grid">
                    {row.map((cell, cellIndex) => (
                        <Cell key = {cellIndex} handleClick = {handleClick} {...cell} />
                    ))}
                </div>
            )
            )}


        </div>
    );
}

