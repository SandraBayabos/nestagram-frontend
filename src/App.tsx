import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/signup"} component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
