import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MapContainer from "./containers/MapContainer"
import Signup from "./components/Signup"
import LoginContainer from './containers/LoginContainer'


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <LoginContainer />
      </div>
  )}

  
}

export default App;
