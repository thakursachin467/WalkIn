import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home/Home';
import StroreOwner from './Containers/StoreOwner/StoreOwner';
import  Contact from './Containers/Contact/Contact';
import  About from './Containers/About/About';
import NavBar from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/store/:id' component={StroreOwner} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
