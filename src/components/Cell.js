import * as React from 'react';
import "../styles.css";
export default function Cell({row, col, isMimic, isChecked, surrounding, handleClick}) {

    return <div onClick = {() => handleClick(row,col)}
        class = "rand">
            <div class = "bottom-left">
                {isChecked && (isMimic ? "" : surrounding)}
            </div>
       
        {isChecked && (isMimic ? <img src = {require("./Mimic.png")} /> : <img src = {require("./ChestOpen.png")} />)}
        </div>
}