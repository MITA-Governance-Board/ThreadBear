import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';

import resourceAction from '../actions/resourceAction';

import Sources from './Sources';
import Requirements from './Requirements';
import NewTest from './NewTest';
import PastTests from './PastTests';
import Landing from '../components/Landing';
import TestDashboard from '../components/TestDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/test" component={TestDashboard} />
            <Route path="/new" component={NewTest} />
            <Route path="/past" component={PastTests} />
            <Route path="/sources" component={Sources}/>
            <Route path="/requirements" component={Requirements}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const source = resourceAction('sources', ['list', 'get']);
  const requirement = resourceAction('requirements', ['list', 'get']);
  return bindActionCreators({
    listSources: source.list,
    listRequirements: requirement.list,
    getRequirement: requirement.get
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    sources: _.values(state.source),
    requirements: _.values(state.requirement)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
