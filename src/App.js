import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* import logo from './trivia.png'; */
import './App.css';
import Games from './pages/Games';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ Games } />
      <Route path="/settings" component={ Settings } />
      <Route path="/feedback" component={ Feedback } />
    </Switch>
  );
}
