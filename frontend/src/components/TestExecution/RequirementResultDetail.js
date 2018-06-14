import React from 'react';
import { Container, Divider, Header, Grid, Icon } from 'semantic-ui-react';
import _ from 'lodash';

import Validation from './Validation';
// TODO: Fill this with actual data and use conditional renders based on available data

export default ({ validations, requirement, validationInstances, manualTesting, failures }) => {
  return (
    <div>
      <Container>
        <Divider />
        <Header as='h3' textAlign='center'>Automated Tests</Header>
          {validations.map((v, i) => <Validation validation={v} validationInstance={validationInstances[i]} failures={failures}/>)}
        <Header as='h3' textAlign='center'>Additional Manual Testing Required</Header>
        {manualTesting ? manualTesting.testing : 'None Defined'}
        <Divider />
        <strong>Sources:</strong>
        {/* {requirement.sources.map(s => <a key={s.id} href={s.url}>{s.name}</a>)} */}
      </Container>
    </div>
);
}



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
);

