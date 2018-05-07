import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../images/ThreadBear_logo.svg'
import { Container, Dropdown, Grid, Icon } from 'semantic-ui-react'

export default () => {
  return (
    <div className='header'>
      <Container>
        <Grid columns='equal'>
          <Grid.Column>
            <a href='/' className='homeLink'>
              <img src={Logo} height='36px' alt='ThreadBear Logo' />
              <span className='headerTitle'>ThreadBear</span>
            </a>
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <a href='/past' className='ui basic button'>
              <Icon name='clock' /> Past Tests
            </a>
            <a href='/new' className='ui secondary button'>
              <Icon name='plus' /> New Test
            </a>
            <Dropdown text='Admin' floating button>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/requirements">Requirements</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/sources">Sources</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
