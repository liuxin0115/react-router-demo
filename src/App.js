import React from 'react';
import Home from './pages/Home/Home';
import Mine from './pages/Mine/Mine';
import Ucenter from './pages/Ucenter/Ucenter';
import Shop from './pages/Shop/Shop';
import Nav from './components/Nav/Nav';
import Demo from './components/Demo/Demo';
import NoFound from './components/NoFound/NoFound';
// import { BrowserRouter as Router, Route} from "react-router-dom";
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route strict exact path="/mine" component={ Mine }></Route>
          <Route strict exact path="/shop" component={ Shop }></Route>
          <Route strict exact path="/mine/ucenter/:id?" component={ Ucenter }></Route>
          <Route strict exact path="/demo" render={ (props) => <Demo { ...props } name="你好" />} />
          <Route component={ NoFound }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
