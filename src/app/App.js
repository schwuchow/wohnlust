import React from 'react';
import './App.scss';
import Navigation from '../features/navigation/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import Story from '../layouts/Story';
import Appartments from '../layouts/Appartments';
import Concept from '../layouts/Concept';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/concept" component={Concept} />
        <Route exact path="/appartments" component={Appartments} />
        <Route exact path="/story" component={Story} />
      </Router>
    </div>
  );
}

export default App;
