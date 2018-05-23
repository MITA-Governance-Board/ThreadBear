import React from 'react';
import Header from "../components/Header"
import { Button, Card, Container, Label } from 'semantic-ui-react'


export default () => {
  return (
    <div role='main'>
      <Header />
      <Container>
        <h1>Past Tests</h1>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>PSM Test Server</Card.Header>
              <Card.Meta>May 1, 2018 1:08pm</Card.Meta>
              <Card.Description>
                <Label basic>Provider Screening</Label>
                <Label basic>MECT Technical</Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                  <Button basic color='grey'><a href='/test'>Show</a></Button>
                  <Button basic color='blue'><a href='/test'>Re-Run</a></Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>PSM Test Server</Card.Header>
              <Card.Meta>April 15, 2018 4:33pm</Card.Meta>
              <Card.Description>
                <Label basic>Provider Screening</Label>
                <Label basic>MECT Technical</Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='grey'><a href='/test'>Show</a></Button>
                <Button basic color='blue'><a href='/test'>Re-Run</a></Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Localhost</Card.Header>
              <Card.Meta>April 11, 2018 10:09am</Card.Meta>
              <Card.Description>
                <Label basic>MECT Technical</Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='grey'><a href='/test'>Show</a></Button>
                <Button basic color='blue'><a href='/test'>Re-Run</a></Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </div>
  );
}
