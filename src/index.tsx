import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Covid19 from './Components/Covid19'
import Faq from './Components/Faq'
import TermsConditions from './Components/TermsConditions'
import About from './Components/About'
import Footer from './Components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/covid-19' component={Covid19} />
        <Route exact path='/terms-conditions' component={TermsConditions} />

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