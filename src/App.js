import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route, withRouter } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import store from './Redux/store';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {

  }
  shouldComponentUpdate(nextProps, nextState) {

  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path='/' render={() => <Home />} />
              <Route path='/home' render={() => <Home />} />
              <Route path='/shop' render={() => <Shop />} />
              <Route path="/sign-in" render={() => <SignIn />} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({

  state: state.firebase.auth

})
export default connect(mapStateToProps)(App)