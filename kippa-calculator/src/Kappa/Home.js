import React from "react";
import CalcList from "./CalcList";
import Main from "./Main";
import Register from "./Register";

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
      <div className="ui container">
        <Register />
        <CalcList />
        <Main />
      </div>
    </div>
  );
}

export default Home;
