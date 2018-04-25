import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import './App.css';

import resourceAction from '../actions/resourceAction';

class App extends Component {

  componentDidMount(){
    this.props.listSources()
    this.props.listRequirements()
  }

  render() {
    return (
      <div className="App">
        {this.props.sources.map(t => {
          return <div key={t.id}> {t.name}: {t.type} </div>
        })}
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
