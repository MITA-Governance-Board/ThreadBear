import React from 'react';
import { Button, Container, Divider } from 'semantic-ui-react';
import moment from 'moment';

// TODO: link the 'previous test' icon to a menu for previous tests
// TODO: Make the refresh icon re-run the current test

export default ({ testExecution }) => (
    <div>
      <Container textAlign='center'>
        <h1>{testExecution.server_name}</h1>
        <a href="{testExecution.server_url}">
          {testExecution.server_url}
        </a>
        <p>{moment(testExecution.execution_date).fromNow()}</p>
        <Button.Group>
          <Button basic disabled icon='file outline' content='Export Results' />
          &nbsp;
          <Button basic disabled icon='refresh' content='Re-run this test' />
        </Button.Group>
        <Divider hidden />
      </Container>
    </div>
  );
