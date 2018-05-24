import React, { Component } from 'react';
import _ from 'lodash';
import { Container, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';


import resourceAction from '../actions/resourceAction';

class Requirements extends Component {
  componentWillUpdate() {
    this.props.listRequirements();
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
        <h1> Requirements </h1>
          <Table celled compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Version</Table.HeaderCell>
                <Table.HeaderCell>Checklist</Table.HeaderCell>
                <Table.HeaderCell>Checklist ID</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Additional Manual Testing</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {this.props.requirements.map((r) => {
              return (
                <Table.Row>
                  <Table.Cell>{r.version}</Table.Cell>
                  <Table.Cell>{r.checklist}</Table.Cell>
                  <Table.Cell>{r.checklist_id}</Table.Cell>
                  <Table.Cell>{r.checklist_category}</Table.Cell>
                  <Table.Cell>{r.description}</Table.Cell>
                  <Table.Cell>{r.additional_manual_testing}</Table.Cell>
                </Table.Row>
              );
            })}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    listRequirements: resourceAction('requirements', ['list']).list,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    requirements: _.values(state.requirement),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Requirements);
