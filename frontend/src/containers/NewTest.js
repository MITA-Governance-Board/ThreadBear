import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import _ from 'lodash';

import {
  Button,
  Container,
  Dropdown,
  Form,
  Grid,
  Input,
  Message,
  Select
} from 'semantic-ui-react';

import Header from '../components/Header';
import submitFormAction from '../actions/submitFormAction';
import resourceAction from '../actions/resourceAction';

// const mectVersions = [
//   { key: 'MECT 2.2', value: 'MECT 2.2', text: 'MECT 2.2' }
// ];
const fhirVersions = [
  { key: 'STU3', value: 'STU3', text: 'STU3' }
];
// const testList = [
//   { key: 'Provider Screening', value: 'Provider Screening', text: 'Provider Screening' },
//   { key: 'MECT Technical', value: 'MECT Technical', text: 'MECT Technical' }
// ];

class NewTestContainer extends Component {
  state = { serverName: '', serverUrl: '', fhirVersion: fhirVersions[0].value, tests: [], mectVersion: null }
  mectVersions = []
  testList = []
  componentDidMount() {
    this.props.listRequirements();
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    this.props.submitNewTest(
      { requirement_instance: this.state },
      (data, dispatch) => {
        dispatch(push('/'));
      }
    );
  }

  render() {
    const { serverName, serverUrl, fhirVersion, mectVersion, tests } = this.state;
    const { requirements } = this.props;
    const mectVersions = [...new Set(_.values(requirements).map(r => r.version))].map((version) => {
      return {
        key: version,
        value: version,
        text: version
      };
    });

    const testList = [...new Set(_.values(requirements).filter(r => r.version === this.state.mectVersion).map(r => r.checklist))].map((checklist) => {
      return {
        key: checklist,
        value: checklist,
        text: checklist
      };
    });
    return (
      <div role='main'>
        <Header />
        <Container>
          <Grid columns='2' centered>
            <Grid.Column>
              <h1>New Test</h1>
              <Message warning>
                <Message.Header>Do not run these tests on a server with ePHI</Message.Header>
                <p>These tests should be performed on a development or test server that does not contain ePHI. 
                  Use the instructions below to prepare your system.</p>
              </Message>
              <Form onSubmit={this.handleSubmit}>
                <h2>Server</h2>
                <Form.Field>
                  <label>Server Name</label>
                  <Input name='serverName' value={serverName} onChange={this.handleChange} fluid placeholder='My Test Server' aria-label='Server Name' />
                </Form.Field>
                <Form.Field>
                  <label>Server URL</label>
                  <Input required name='serverUrl' value={serverUrl} onChange={this.handleChange} fluid placeholder='http://example.com/fhir' aria-label='Server URL' />
                </Form.Field>
                <Form.Field>
                  <label>FHIR Version</label>
                  <Select required name='fhirVersion' value={fhirVersion} onChange={this.handleChange} options={fhirVersions} />
                </Form.Field>
                <Button disabled type="button" fluid content='Test Connection' />
                <h2>Tests</h2>
                <Form.Field>
                  <label>MECT Version</label>
                  <Select required name='mectVersion' value={mectVersion} onChange={this.handleChange} options={mectVersions} />
                </Form.Field>
                <Form.Field>
                  <label>Tests</label>
                  <Dropdown disabled={!mectVersion} required name='tests' value={tests} onChange={this.handleChange} placeholder='Select one or more tests' fluid multiple selection options={testList} />
                </Form.Field>
                <h2>Pre-Test Instructions</h2>
                Prior to running the test, you should do the following:
                <ul>
                  <li>Download test data package (we will need to provide this)</li>
                  <li>Process some data in the module to show that certain business functions work properly</li>
                  <li>Set up user accounts (with proper authorization) to prove that RBAC works</li>
                </ul>
                <Button type='submit' fluid primary> Run Tests</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitNewTest: submitFormAction('requirement_instance', '/requirement_instances'),
    listRequirements: resourceAction('requirements', ['list']).list
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    requirements: _.values(state.requirement)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTestContainer);
