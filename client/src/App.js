import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home/Home';
import StroreOwner from './Containers/StoreOwner/StoreOwner';
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
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
