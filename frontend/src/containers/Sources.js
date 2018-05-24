import React, { Component } from 'react';
import Header from "../components/Header"
import { Container, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import resourceAction from '../actions/resourceAction';

// TODO: Convert to Link and render as text if s.url doesn't exist

class Sources extends Component {
  componentWillUpdate() {
    this.props.listSources();
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <h1> Sources </h1>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                  <Table.HeaderCell>URL</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
              {this.props.sources.map(s => {
                return (
                  <Table.Row>
                    <Table.Cell>{s.name}</Table.Cell>
                    <Table.Cell>{s.type}</Table.Cell>
                    <Table.Cell>{s.url}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  const source = resourceAction('sources', ['list', 'get']);
  return bindActionCreators({
    listSources: source.list,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    sources: _.values(state.source),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
