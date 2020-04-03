import React from 'react';
import './App.scss';
import Navigation from '../features/navigation/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import Story from '../layouts/Story';
import Appartments from '../layouts/Appartments';
import Concept from '../layouts/Concept';
import { connect } from 'react-redux';
import { fetchAppartments } from './actionApp';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAppartments();
  }

  render() {
    return (
      <div className="App">
        <Router>
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

const mapStateToProps = (state) => {
  // console.log(state);
  return { appartments: state.listAppartments.appartments };
};

export default connect(mapStateToProps, { fetchAppartments })(App);
