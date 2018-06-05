import React from 'react';
import { Container, Divider, Header, Grid, Icon } from 'semantic-ui-react';
import _ from 'lodash';
// TODO: Fill this with actual data and use conditional renders based on available data

export default ({ validationInstance, requirement }) => {
  return (
    <div>
      <Container>
        <Divider />
        <Header as='h3' textAlign='center'>Automated Tests</Header>
        <Grid columns='equal' verticalAlign='top'>
          <Grid.Row>
            <Grid.Column width={2}>
            {validationInstance.validation.id}
            </Grid.Column>
            <Grid.Column>
              <strong>Expected Result:</strong> {validationInstance.validation.expected_result}
              <br />
              <strong>Alternative Evidence:</strong> {validationInstance.validation.alternative_evidence || 'None Defined'}
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name='remove circle' size='large' color='red' />
            </Grid.Column>
            <Grid.Column width={2}>
              Failed
            </Grid.Column>
          </Grid.Row>
          {validationInstance.failures.map(f => <Failure failure={f} />)}
        </Grid>
        <Header as='h3' textAlign='center'>Additional Manual Testing Required</Header>
        {requirement.additional_manual_testing || 'None Defined'}
        <Divider />
        <strong>Sources:</strong>
        {requirement.sources.map(s => <a key={s.id} href={s.url}>{s.name}</a>)}
      </Container>
    </div>
  );
};


const Failure = ({ failure }) => (
  <Grid.Row>
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column>
              <strong>{failure.name}:</strong> {failure.description}
              <br />
              <strong>Possible Mitigation:</strong> {failure.mitigation}
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name='remove circle' size='large' color='red' />
            </Grid.Column>
            <Grid.Column width={2}>
              {_.capitalize(failure.severity)}
            </Grid.Column>
          </Grid.Row>
)