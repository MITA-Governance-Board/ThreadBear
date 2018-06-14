import React from 'react';
import { Grid, Icon, Container, Divider, Header } from 'semantic-ui-react';

import Failure from './Failure';

export default ({ validation, validationInstance, failures }) => {
  const validationFailures = failures[validationInstance._id.$oid] || [];

  return (
        <Grid columns='equal' verticalAlign='top'>
            <Grid.Row>
                <Grid.Column width={3}>
                    {validation.id}
                </Grid.Column>
                <Grid.Column>
                    <strong>Result:</strong> {validationInstance.state}
                    <br />
                    <strong>Expected Result:</strong> {validation.expected_result}
                    <br />
                    <strong>Alternative Evidence:</strong> {validation.alternative_evidence || 'None Defined'}
                </Grid.Column>
                {/* <Grid.Column width={1}>
                    <Icon name='remove circle' size='large' color='red' />
                </Grid.Column>
                <Grid.Column width={2}>
                    {validationInstance.state || 'Error'}
        </Grid.Column> */}
            </Grid.Row>
            {validationFailures.map(f => <Failure failure={f} />)}
        </Grid>
  );
};
