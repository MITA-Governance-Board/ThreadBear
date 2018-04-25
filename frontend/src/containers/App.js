import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import './App.css';

import resourceAction from '../actions/resourceAction';

class App extends Component {

  componentDidMount(){
    this.props.list()
    this.props.get('5ae0f0b50a888182da11c67f')
  }

  render() {
    return (
      <div className="App">
        {this.props.tests.map(t => {
          return <div key={t._id.$oid}> {t.name} </div>
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(resourceAction('tests', ['list', 'get']), dispatch);
}

function mapStateToProps(state) {
  return {
    tests: _.values(state.test)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
