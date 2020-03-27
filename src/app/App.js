import React from 'react';
import './App.scss';
import Navigation from '../features/navigation/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../layouts/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
