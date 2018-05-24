import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import _ from 'lodash';
import moment from 'moment';

import { Button, Card, Container, Label } from 'semantic-ui-react';
import Header from '../components/Header';
import resourceAction from '../actions/resourceAction';

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
            {this.props.requirementInstances.map(i => <TestExecution test={i}/>)}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    listRequirementInstances: resourceAction('requirement_instances', ['list']).list
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    requirementInstances: _.sortBy(_.values(state.requirementInstance), ['created_at']).reverse()
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PastTestContainer);


const TestExecution = ({ test }) => {
  return (
    <Card key={test._id.$oid}>
            <Card.Content>
              <Card.Header>Test Execution</Card.Header>
              <Card.Meta>{moment(test.created_at).fromNow()}</Card.Meta>
              <Card.Description>
                {test.validation_instances.map(i => <Label key={i._id.$oid}>{i.validation.id}</Label>)}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                  <Button disabled basic color='grey'><a href='/test'>Show</a></Button>
                  <Button disabled basic color='blue'><a href='/test'>Re-Run</a></Button>
              </div>
            </Card.Content>
          </Card>
  );
};
