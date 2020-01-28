import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Payment1 from './components/Payment1';
import Payment2 from './components/Payment2';
import Payment3 from './components/Payment3';
import ContactUs from './components/ContactUs';
import Alerts from './components/Alerts';
import setAuthToken from './utils/SetAuthToken'
import Plans from './components/Plans';



if (localStorage.token) {
  setAuthToken(localStorage.token)
}

class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {/* <Nav /> */}
          </div>
          <Switch>
            <Route exact path='/Plans' component={Plans} />
            <Route exact path='/payment1' component={Payment1} />
            <Route exact path='/payment2' component={Payment2} />
            <Route exact path='/payment3' component={Payment3} />
            <Route exact path='/ContactUs' component={ContactUs} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
          {/* <Footer /> */}

        </BrowserRouter>



      </div>
    );
  }
}

export default App;