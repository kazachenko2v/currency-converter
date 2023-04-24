import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Converter, Main } from "./Pages";

function App() {
  return (
    <Router basename={"/currency-converter/"}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/converter">
          <Converter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
