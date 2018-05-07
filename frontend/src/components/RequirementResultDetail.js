import React from 'react';
import { Container, Divider, Header, Grid, Icon } from 'semantic-ui-react'

// TODO: Fill this with actual data and use conditional renders based on available data

export default () => {
  return (
    <div>
      <Container>
        <Divider />
        <Header as='h3' textAlign='center'>Automated Tests</Header>
        <Grid columns='equal' verticalAlign='top'>
          <Grid.Row>
            <Grid.Column width={2}>
              Valid_001
            </Grid.Column>
            <Grid.Column>
              <strong>Expected Result:</strong> Expected Result text goes here to tell the end user what this automated test is attempting to do.
              <br />
              <strong>Alternative Evidence:</strong> Each validation should include alternative evidence that can be provided if this automated test is not passed.
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name='remove circle' size='large' color='red' />
            </Grid.Column>
            <Grid.Column width={2}>
              Failed
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column>
              <strong>Fail_001:</strong> Explain what kind of failure was encountered for this automated test.
              <br />
              <strong>Possible Mitigation:</strong> If possible, explain how the failure might be fixed.
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name='remove circle' size='large' color='red' />
            </Grid.Column>
            <Grid.Column width={2}>
              Critical
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header as='h3' textAlign='center'>Additional Manual Testing Required</Header>
        If any additional manual testing is required (this should be stored on the requirement), render it here.
        <Divider />
        <strong>Sources:</strong> <a href='https://www.ssa.gov/OP_Home/ssact/title11/1115.htm'>Section 1115 of the Social Security Act</a>, <a href='https://www.ssa.gov/OP_Home/ssact/title19/1915.htm'>Section 1915(b) Freedom of Choice (Managed Care) Waivers</a>, <a href='https://www.ssa.gov/OP_Home/ssact/title19/1915.htm'>Section 1915(c) Home and Community-Based Services Waivers</a>
      </Container>
    </div>
  );
}
