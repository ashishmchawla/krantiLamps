import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
        </Switch>
    );
}

export default App;
