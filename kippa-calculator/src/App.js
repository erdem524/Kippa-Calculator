import "./App.css";
import "semantic-ui-css/semantic.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Kappa/Home";
// import Login from "./Kappa/Login";
import Succes from "./Kappa/Succes";
import Game from "./Kappa/Game";
// import Fetcher from "./Kappa/Fetch";
// import { Button } from "semantic-ui-react";

// import Home from "./Kappa/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Game} />
            <Route path="/bingo" exact component={Succes} />
          </Switch>
        </Router>
      </div>
      {/* <Fetcher /> */}
    </div>
  );
}

export default App;
