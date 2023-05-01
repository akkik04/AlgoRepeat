import React from 'react';
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EntryNavbar from './components/entryNavbar/entryNavbar';
import DashboardNavbar from './components/dashboardNavbar/dashboardNavbar';
import Footer from './components/footer/footer';
import EntryPage from './pages/entry/entryPage';
import About from './pages/about/about';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Home from './pages/home/home';
import './App.css';

const App = () =>{
    return(
      <Router>
          <Switch>
                <Route exact path="/">
                    <EntryNavbar />
                    <EntryPage />
                    <Footer />
                </Route>
                <Route exact path="/about">
                    <EntryNavbar />
                    <About />
                    <Footer />
                </Route>
                <Route exact path="/signup">
                    <EntryNavbar />
                    <Signup/>
                    <Footer />
                </Route>
                <Route exact path="/login">
                    <EntryNavbar />
                    <Login />
                    <Footer />
                </Route>
                <Route exact path="/home">
                    <DashboardNavbar />
                    <Home />
                    <Footer />
                </Route>
          </Switch>
      </Router>
    )
}
export default App;
