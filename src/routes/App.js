import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "@views/Home";
import "@assets/styles/App.scss";
import Algorithm from "@views/Algorithm";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/algorithm" component={Algorithm}/>
    </Switch>
  </BrowserRouter>
);

export default App;