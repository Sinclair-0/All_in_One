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
  

    return (
        
            <div>
                <div>
                    {gameState.isGameOver ? "Game Over!" : "MimicSweeper"}
                </div>

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

