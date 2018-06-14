import React from 'react';
import { Container, Divider, Header, Grid, Icon } from 'semantic-ui-react';

import Validation from './Validation';
// TODO: Fill this with actual data and use conditional renders based on available data

export default ({ validations, requirement, validationInstances, manualTesting, failures, sources }) => {
  const requirementSources = requirement.source_ids.map(s => sources[s]);
  return (
    <div>
      <Container>
        <Divider />
        <Header as='h3' textAlign='center'>Automated Tests</Header>
          {validations.map((v, i) => <Validation validation={v} validationInstance={validationInstances[i]} failures={failures}/>)}
        <Header as='h3' textAlign='center'>Additional Manual Testing Required</Header>
        {manualTesting ? manualTesting.testing : 'None Defined'}
        <Divider />
        <strong>Sources:&nbsp;</strong>
        {requirementSources.map(s => <a target='_blank' key={s.id} href={s.url}>{s.name}</a>)}
      </Container>
    </div>
);
}

