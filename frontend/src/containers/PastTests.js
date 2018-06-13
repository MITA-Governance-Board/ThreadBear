import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import _ from 'lodash';

import { Card, Container } from 'semantic-ui-react';

import Header from '../components/Header';
import resourceAction from '../actions/resourceAction';
import TestExecution from '../components/TestExecution/TestExecution';

class PastTestContainer extends Component {
  componentDidMount() {
    this.props.listRequirementInstances();
  }

  render() {  
    return (
      <div>
        <Header />
        <Container>
          <h1>Past Tests</h1>
          <Card.Group>
            {this.props.testExecutions.map(i => <TestExecution key={i._id.$oid}test={i}/>)}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    listRequirementInstances: resourceAction('test_executions', ['list']).list
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    testExecutions: _.sortBy(_.values(state.testExecutions), ['execution_date']).reverse()
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PastTestContainer);
