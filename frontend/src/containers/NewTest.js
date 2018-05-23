import React from 'react';
import Header from "../components/Header"
import { Button, Container, Dropdown, Form, Grid, Input, Message, Select } from 'semantic-ui-react'

const mectVersions = [
  {key: 'MECT 2.2', value: 'MECT 2.2', text: 'MECT 2.2'}
]
const fhirVersions = [
  {key: 'STU3', value: 'STU3', text: 'STU3'}
]
const testList = [
  {key: 'Provider Screening', value: 'Provider Screening', text: 'Provider Screening'},
  {key: 'MECT Technical', value: 'MECT Technical', text: 'MECT Technical'}
]

export default () => {
  return (
    <div role='main'>
      <Header />
      <Container>
        <Grid columns='2' centered>
          <Grid.Column>
            <h1>New Test</h1>
            <Message warning>
              <Message.Header>Do not run these tests on a server with ePHI</Message.Header>
              <p>These tests should be performed on a development or test server that does not contain ePHI. Use the instructions below to prepare your system.</p>
            </Message>
            <Form>
              <h2>Server</h2>
              <Form.Field>
                <label>Server Name</label>
                <Input fluid placeholder='My Test Server' aria-label='Server Name' />
              </Form.Field>
              <Form.Field>
                <label>Server URL</label>
                <Input fluid placeholder='http://example.com/fhir' aria-label='Server URL' />
              </Form.Field>
              <Form.Field>
                <label>FHIR Version</label>
                <Select options={fhirVersions} />
              </Form.Field>
              <Button fluid content='Test Connection'/>
              <h2>Tests</h2>
              <Form.Field>
                <label>MECT Version</label>
                <Select options={mectVersions} />
              </Form.Field>
              <Form.Field>
                <label>Tests</label>
                <Dropdown placeholder='Select one or more tests' fluid multiple selection options={testList} />
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
