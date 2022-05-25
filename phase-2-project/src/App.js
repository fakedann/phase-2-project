import React, { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import BookSelection from './BookSelection';
import Discover from './Discover';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route exact path="/nyt-search">
          <BookSelection />
        </Route>
        <Route exact path="/discover">
          <Discover />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
