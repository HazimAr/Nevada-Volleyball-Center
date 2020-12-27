import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header, { checkHeader } from './Components/Header'
import Home from './Components/Home'
import Covid19 from './Components/Covid19'
import Faq from './Components/Faq'
import TermsConditions from './Components/TermsConditions'
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Pricing from './Components/Pricing'

window.onscroll = function () {
  checkHeader()
}

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route path='/about' component={About} />
        <Route path='/faq' component={Faq} />
        <Route path='/covid-19' component={Covid19} />
        <Route path='/terms-conditions' component={TermsConditions} />
        <Route path='/contact' component={Contact} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/' component={Home} />

      </Switch>
      <Footer />
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);