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
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

class App extends React.Component {

  componentDidMount = () => {
    this.props.fetchAppartmentUnits();
  }

  render() {

    const routes = [
      {name: 'Home', path: '/', Component: Home},
      {name: 'Concept', path: '/concept', Component: Concept},
      {name: 'Appartments', path: '/appartments', Component: Appartments},
      {name: 'Story', path: '/story', Component: Story}
    ];

    return (
      <div className="App">
        <Router>
          <Link to="/"><object type="image/svg+xml" data={Logo} aria-label="Logo"></object></Link>
          <Navigation routes={routes}/>
            {
              routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="fade"
                      unmountOnExit
                    >
                      <div className="fade">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))
            }
          {/* <Route exact path="/" component={Home} />
          <Route path="/concept" component={Concept} />
          <Route path="/appartments" component={Appartments} />
          <Route path="/story" component={Story} /> */}
        </Router>
      </div>
    );
  }
}

export default connect(null, {fetchAppartmentUnits})(App);
