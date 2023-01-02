import React from "react";

function Keyboard(props) {
  return (
    <div>
      <div className="keyboard-row">
        <button className="letter keyboard-btn">Q</button>
        <button className="letter keyboard-btn">W</button>
        <button className="letter keyboard-btn">E</button>
        <button className="letter keyboard-btn">R</button>
        <button className="letter keyboard-btn">T</button>
        <button className="letter keyboard-btn">Y</button>
        <button className="letter keyboard-btn">U</button>
        <button className="letter keyboard-btn">I</button>
        <button className="letter keyboard-btn">O</button>
        <button className="letter keyboard-btn">P</button>
      </div>
      <div className="keyboard-row">
        <button className="letter keyboard-btn">A</button>
        <button className="letter keyboard-btn">S</button>
        <button className="letter keyboard-btn">D</button>
        <button className="letter keyboard-btn">F</button>
        <button className="letter keyboard-btn">G</button>
        <button className="letter keyboard-btn">H</button>
        <button className="letter keyboard-btn">J</button>
        <button className="letter keyboard-btn">K</button>
        <button className="letter keyboard-btn">L</button>
      </div>
      <div className="keyboard-row">
        <button id="enter" className="keyboard-btn">
          ENTER
        </button>
        <button className="letter keyboard-btn">Z</button>
        <button className="letter keyboard-btn">X</button>
        <button className="letter keyboard-btn">C</button>
        <button className="letter keyboard-btn">V</button>
        <button className="letter keyboard-btn">B</button>
        <button className="letter keyboard-btn">N</button>
        <button className="letter keyboard-btn">M</button>
        <button id="delete" className="keyboard-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            class="game-icon"
            data-testid="icon-backspace"
          >
            <path
              fill="var(--color-tone-1)"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
