import React from "react";
import Bingo from "./Components/Bingo";
import Answer from "./Components/Answer";
import Calculations from "./Components/Calculations";
import Logo from "./logo.png";
function Calculator() {
  return (
    <div>
      <div className="ui inverted segment">
        <div className="ui menu">
          <a href="./" className="active item">
            Home
          </a>
          <a href="./" className="item">
            Math
          </a>
          <a href="./" className="item">
            Sudoku
          </a>
          <a href="./" className="item">
            Kakuro
          </a>
          <div className="right menu">
            <a href="./" className="ui item">
              <img src={Logo} alt="#" />
            </a>
          </div>
        </div>
      </div>
      <div className="ui container">
        <div className="ui action input">
          <input type="text" placeholder="Player Name" />
          <div className="ui secondary submit button">Submit</div>
        </div>
        <Calculations />
      </div>
      <div className="ui container">
        <Answer />

        <Bingo />
      </div>
    </div>
  );
}

export default Calculator;
