import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
function Login() {
  return (
    <div>
      <input type="text" required />
      <Router>
        <Switch>
          <Route path="/home" component={Home}>
            <div>
              {" "}
              <button type="submit">Submit</button>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Login;
