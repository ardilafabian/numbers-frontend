import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "@views/Home";
import Algorithm from "@views/Algorithm";
import Process from "@views/Process";
import "@assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/algorithm" component={Algorithm}/>
      <Route exact path="/process" component={Process}/>
    </Switch>
  </BrowserRouter>
);

export default App;