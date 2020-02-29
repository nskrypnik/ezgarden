import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

// components import
import Header from 'components/Header';
import Home from 'components/Home';
import Profile from 'components/Profile';
import Details from 'components/Details';


function App() {
  return (
    <Router>
      <div className="EarthquakeZenGardenApp">
        <Header />
        <div className="appContent">
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/details/:id" component={Details} />
        </div>
      </div>
    </Router>
  );
}

export default App;
