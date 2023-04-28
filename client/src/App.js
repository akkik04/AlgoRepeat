import React from 'react';
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import './App.css';

const App = () =>{
    return(
      <Router>
          <Navbar />
          <Switch>
                <Route exact path="/">
                    
                </Route>
          </Switch>
      </Router>
    )
}
export default App;
