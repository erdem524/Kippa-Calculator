import React from "react";

function Menu() {
  return (
    <div className="ui segment">
      <div className="ui black menu">
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
  );
}

export default Menu;
