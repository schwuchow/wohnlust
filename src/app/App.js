import React from 'react';
import './App.scss';
import Navigation from '../features/navigation/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import Story from '../layouts/Story';
import Appartments from '../layouts/appartments/Appartments';
import Concept from '../layouts/Concept';
import Logo from '../img/logo.svg';
import { connect } from 'react-redux';
import { fetchAppartmentUnits } from './actionApp';
import { Link } from 'react-router-dom'

class App extends React.Component {

  componentDidMount = () => {
    this.props.fetchAppartmentUnits();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/"><object type="image/svg+xml" data={Logo} aria-label="Logo"></object></Link>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/concept" component={Concept} />
          <Route path="/appartments" component={Appartments} />
          <Route path="/story" component={Story} />
        </Router>
      </div>
    );
  }
}

export default connect(null, {fetchAppartmentUnits})(App);
