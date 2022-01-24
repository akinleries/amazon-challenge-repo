import React from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
