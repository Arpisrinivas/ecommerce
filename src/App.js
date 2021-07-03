import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Kart, AboutUs } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/kart">
          <Kart />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
