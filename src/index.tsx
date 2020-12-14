import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Components/Home'
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);