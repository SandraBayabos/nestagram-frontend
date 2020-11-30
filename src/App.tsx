import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/Signup';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/signup"} component={SignUp}/>
        <Route path={"/login"} component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
