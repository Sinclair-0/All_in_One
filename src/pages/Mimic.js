import Board from '../components/Board';
import { useState } from 'react';
export default function Mimic () {
  function callBoard() {
    console.log("hi");
    return(
    <Board />
    )
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isReset, setIsReset] = useState(true);
  const toggle = () => {
    setIsReset((current) => !current);
  }
    return (
      <div class = "container">
      <button onClick={() => setIsOpen(true)} class = "popupbutton">
      Rules!
  </button>
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
      <button onClick={toggle} class = "popupbutton">
              Lets Play!
      </button>
      <div>
        {isReset ? (<div><Board /></div>) : (<section><Board /></section>)}
      </div>



      </div>
    )
  
  }