import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import SignIn from './features/sign-up';
import AppOnePage from './AppOne';
import AppTwoPage from './AppTwo';
import ReactGA from 'react-ga';


function App() {
  useEffect(() => {
    ReactGA.initialize('G-DTCJYLM0VF');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  
  useEffect(() => {
   console.log(window.location.pathname)
  })
  return (
    // <SignIn></SignIn>

    <div className="App">
    <header className="App-header">
      <Router>
        <a href="/appOne" >AppOne</a>
        <br />
        <br/>
        <a href="/appTwo" >AppTwo</a>
        <br />
        <br />

        <Switch>
          <Route exact path="/appOne"  ><AppOnePage /> </Route>
          <Route exact path="/appTwo"  ><AppTwoPage /> </Route>
        </Switch>
      </Router>
    </header>
  </div>
  );
}
export default App;
