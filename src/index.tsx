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
import Contact from './Components/Contact'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route path='/about' component={About} />
        <Route path='/faq' component={Faq} />
        <Route path='/covid-19' component={Covid19} />
        <Route path='/terms-conditions' component={TermsConditions} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />

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