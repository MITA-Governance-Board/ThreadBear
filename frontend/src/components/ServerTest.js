import React from 'react';
import { Button, Container, Divider } from 'semantic-ui-react'

// TODO: link the 'previous test' icon to a menu for previous tests
// TODO: Make the refresh icon re-run the current test

export default () => {
  return (
    <div>
      <Container textAlign='center'>
        <h1>PSM Test Server</h1>
        <a href="http://testing.psm.solutionguidance.com:8080/cms/fhir">
          http://testing.psm.solutionguidance.com:8080/cms/fhir
        </a>
        <p>May 1, 2018 1:08pm</p>
        <Button.Group>
          <Button basic icon='file outline' content='Export Results' />
          &nbsp;
          <Button basic icon='refresh' content='Re-run this test' />
        </Button.Group>
        <Divider hidden />
      </Container>
    </div>
  );
}
