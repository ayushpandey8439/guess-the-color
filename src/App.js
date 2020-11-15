import { Router } from "react-router-dom";
import "./App.scss";
import Grid from "./components/Grid/Grid";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/game" component={Grid}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
