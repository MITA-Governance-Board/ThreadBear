import React from 'react';
import { Icon, Grid } from 'semantic-ui-react';

export default ({ failures }) => {
  let icon = <Icon name='check circle' size='big' color='green' />;
  let status = 'Meets';
  if (failures.length > 0) {
    icon = <Icon name='remove circle' size='big' color='red' />;
    status = "Doesn't Meet";
  }
  return (
        <Grid>
            <Grid.Column width={6} >
                {icon}
            </Grid.Column>
            <Grid.Column>
                {status}
            </Grid.Column>
        </Grid>
  );
};

