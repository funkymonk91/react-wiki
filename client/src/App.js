import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './scss/app.scss';

import Home from './Home';
import CreateDocument from './CreateDocument';
import NavigationBar from './Components/NavigationBar';

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <Router>
        {showNav ? <NavigationBar></NavigationBar> : null}
        
        <div className="pt-24">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/create">
                    <CreateDocument setShowNav={setShowNav} />
                </Route>
            </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
