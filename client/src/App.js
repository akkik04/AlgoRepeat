import React from 'react';
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import EntryPage from './pages/entry/entryPage';
import About from './pages/about/about';
import './App.css';

const App = () =>{
    return(
      <Router>
          <Switch>
                <Route exact path="/">
                    <Navbar />
                    <EntryPage />
                    <Footer />
                </Route>
                <Route exact path="/about">
                    <Navbar />
                    <About />
                    <Footer />
                </Route>
          </Switch>
      </Router>
    )
}
export default App;
