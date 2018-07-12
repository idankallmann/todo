import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import User from './components/user/User';
import Admin from './components/admin/Admin';


class App extends Component {
  contsructor() {
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            <h1>TODO App</h1>
            <Route path="/user" component={User} />
            <Route path="/admin" component={Admin} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
