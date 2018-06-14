import React from 'react';
import { Grid, Icon, Container, Divider, Header } from 'semantic-ui-react';


export default ({ failure }) => {
  return (
    <Grid.Row>
    <Grid.Column width={3}>
    </Grid.Column>
    <Grid.Column>
      <strong>{failure.name}</strong> {failure.description}
      <br />
      <strong>Possible Mitigation:</strong> {failure.mitigation || 'None Provided'}
    </Grid.Column>
    <Grid.Column width={1}>
      <Icon name='remove circle' size='large' color='red' />
    </Grid.Column>
    <Grid.Column width={2}>
      {failure.severity}
    </Grid.Column>
  </Grid.Row>

  );
};

