import React from "react";
import Main from "./Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Succes from "./Succes";
function Game() {
  return (
    <div>
      <div className="ui inverted segment">
        <div className="ui menu">
          <a href="/" className="active item">
            Home
          </a>
          <a href="/Math" className="item">
            Math
          </a>
          <a href="/sudoku" className="item">
            Sudoku
          </a>
          <a href="./kakuro" className="item">
            Kakuro
          </a>
          <div className="right menu">
            <a href="./" className="ui item">
              <img
                src="https://play-lh.googleusercontent.com/BbT5hYY6c0yX_CN8teq5FKcsXGkonZcaDWtcgqTFeo47G6vBg6BxeyWSU0TIDA4WhxV6=s360-rw"
                alt="#"
              />
            </a>
          </div>
        </div>
      </div>
      <Main />

      <Router>
        <Switch>
          <Route path="/bingo" exact component={Succes} />
        </Switch>
      </Router>
    </div>
  );
}

export default Game;
