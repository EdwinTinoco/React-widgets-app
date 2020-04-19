import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import "../../../style/main";

import NavBar from "./navbar";
import Home from "./home";
import AddSub from "./add-sub";
import ToggleMe from "./toggle-me";
import HideMe from "./hide-me";
import GrowShrink from "./grow-shrink";
import PushAround from "./push-around";
import CurrentTime from "./current-time";
import ColorWord from "./color-word";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/add-sub" component={AddSub} />
            <Route path="/toggle-me" component={ToggleMe} />
            <Route path="/hide-me" component={HideMe} />
            <Route path="/grow-shrink" component={GrowShrink} />
            <Route path="/push-around" component={PushAround} />
            <Route path="/current-time" component={CurrentTime} />
            <Route path="/color-word" component={ColorWord} />
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}


     
    
