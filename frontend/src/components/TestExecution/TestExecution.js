
import React from 'react';
import moment from 'moment';
import { Button, Card, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default ({ test }) => (
      <Card key={test._id.$oid}>
              <Card.Content>
              <Link to={`/test/${test._id.$oid}`}>
                <Card.Header>{test.server_name}</Card.Header>
                <Card.Meta>{test.server_url}</Card.Meta>
              </Link>
                <Card.Meta>{moment(test.execution_date).fromNow()}</Card.Meta>
                <Card.Description>
                  {test.tags.map(i => <Label key={i}>{i}</Label>)}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='grey'><Link to={`/test/${test._id.$oid}`}>Show</Link></Button>
                    <Button disabled basic color='blue'><a href='/test'>Re-Run</a></Button>
                </div>
              </Card.Content>
            </Card>
);
