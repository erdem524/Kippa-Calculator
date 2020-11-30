import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calculations from "../Klippa/Components/Calculations";

import Game from "./Game";
import Succes from "./Succes";
function Home() {
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
      <Calculations />
      <Router>
        <Switch>
          <Route path="/game" exact component={Game} />
          <Route path="/bingo" exact component={Succes} />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
