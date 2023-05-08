import React from "react";
import { Switch, Route } from "react-router-dom";
import { Converter, Main, NotFound } from "./Pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/converter">
          <Converter />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
