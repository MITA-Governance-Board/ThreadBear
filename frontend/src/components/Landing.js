import React from 'react';
import Header from "./Header"
import { Container, Divider, Grid, Icon, Segment } from 'semantic-ui-react'


export default () => {
  return (
    <div role='main' className='landing'>
      <Header />
      <Container>
        <Divider hidden />
        <Grid>
          <Grid.Row centered columns={2}>
            <Grid.Column textAlign='center'>
              <h1>Welcome to ThreadBear!</h1>
              <p>ThreadBear is a utility that tests Medicaid IT modules for security, performance, and conformance to <a href='http://projectpoplin.org/'>Poplin APIs</a> and <a href='https://www.medicaid.gov/medicaid/data-and-systems/mect/index.html'>MECT Checklist</a> criteria.</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={3}>
            <Grid.Column textAlign='center'>
              <a href='/past'>
                <Segment inverted color='grey'>
                  <Icon circular inverted name='clock' size='huge' />
                  <h2>Review Past Tests</h2>
                </Segment>
              </a>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <a href='/new'>
                <Segment inverted color='blue'>
                  <Icon circular inverted name='plus' size='huge' />
                  <h2>Start a New Test</h2>
                </Segment>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
