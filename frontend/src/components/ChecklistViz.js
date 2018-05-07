import React from 'react';
import { Grid, Icon, Table } from 'semantic-ui-react'

// TODO: Add popups and click events to each requirement icon
// TODO: Break each checklistViz component out and wire it to the actual data
// TODO: Not sure if the legend is necessary when the icons have tooltips...

export default () => {
  return (
    <div>
      <Table compact textAlign='center'>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Icon name='check circle' size='large' color='green' /> Meets
            </Table.Cell>
            <Table.Cell>
              <Icon name='question circle' size='large' color='blue' /> Manual Testing Required
            </Table.Cell>
            <Table.Cell>
              <Icon name='warning circle' size='large' color='orange' /> Partially Meets
            </Table.Cell>
            <Table.Cell>
              <Icon name='remove circle' size='large' color='red' /> Doesnt Meet
            </Table.Cell>
            <Table.Cell>
              <Icon name='x' size='large' color='grey' /> Not Assessed
            </Table.Cell>
            <Table.Cell>
              <Icon loading name='circle notched' size='large' color='grey' /> In Progress
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Grid celled='internally' columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <h3>Provider Screening</h3>
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='remove circle' size='large' color='red' />
            <Icon name='remove circle' size='large' color='red' />
            <Icon name='remove circle' size='large' color='red' />
            <Icon name='remove circle' size='large' color='red' />
            <Icon loading name='circle notched' size='large' color='grey' />
            <Icon loading name='circle notched' size='large' color='grey' />
          </Grid.Column>
          <Grid.Column>
            <h3>Access and Delivery</h3>
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon loading name='circle notched' size='large' color='grey' />
            <Icon loading name='circle notched' size='large' color='grey' />
            <Icon loading name='circle notched' size='large' color='grey' />
            <Icon loading name='circle notched' size='large' color='grey' />
            <Icon loading name='circle notched' size='large' color='grey' />
            <Icon loading name='circle notched' size='large' color='grey' />
            <Icon loading name='circle notched' size='large' color='grey' />
          </Grid.Column>
          <Grid.Column>
            <h3>Information Architecture</h3>
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='remove circle' size='large' color='red' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h3>Intermediary and Interface</h3>
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
          </Grid.Column>
          <Grid.Column>
            <h3>Integration and Utility</h3>
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='x' size='large' color='grey' />
          </Grid.Column>
          <Grid.Column>
            <h3>Standards and Conditions</h3>
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='check circle' size='large' color='green' />
            <Icon name='question circle' size='large' color='blue' />
            <Icon name='warning circle' size='large' color='orange' />
            <Icon name='x' size='large' color='grey' />
            <Icon name='x' size='large' color='grey' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

// This was the original attempt based on the mockup, but it is HUGE on the page and feels disorganized
// <Grid celled='internally' columns='equal'>
//   <Grid.Row>
//     <Grid.Column>
//       <h3>Provider Screening</h3>
//       <h4>BO.1: Provider Eligibility Determination</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='remove circle' size='large' color='red' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <h4>BO.2: Provider Monitoring</h4>
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='question circle' size='large' color='blue' />
//       <h4>BO.3: Reporting Provider Status</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon loading name='circle notched' size='large' color='grey' />
//       <Icon loading name='circle notched' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='remove circle' size='large' color='red' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='remove circle' size='large' color='red' />
//       <Icon name='remove circle' size='large' color='red' />
//       <h4>BO.5: External System Access</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='question circle' size='large' color='blue' />
//       <h4>BO.6: Provider Appeals</h4>
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='question circle' size='large' color='blue' />
//     </Grid.Column>
//     <Grid.Column>
//       <h3>Access and Delivery</h3>
//       <h4>Business Intelligence</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <h4>Client Support</h4>
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <h4>Forms and Reporting</h4>
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <h4>Performance Management</h4>
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <h4>Security and Privacy</h4>
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon loading name='circle notched' size='large' color='grey' />
//       <Icon loading name='circle notched' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon loading name='circle notched' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon loading name='circle notched' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon loading name='circle notched' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon loading name='circle notched' size='large' color='grey' />
//       <Icon loading name='circle notched' size='large' color='grey' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//     </Grid.Column>
//     <Grid.Column>
//       <h3>Information Architecture</h3>
//       <h4>Conceptual Data Model</h4>
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <h4>Data Management Strategy</h4>
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <h4>Data Standards</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='remove circle' size='large' color='red' />
//       <h4>Logical Data Model</h4>
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//     </Grid.Column>
//   </Grid.Row>
//   <Grid.Row>
//     <Grid.Column>
//       <h3>Intermediary and Interface</h3>
//       <h4>Business Process Management</h4>
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <h4>Data Connectivity</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <h4>Systems Oriented Architecture</h4>
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='warning circle' size='large' color='orange' />
//       <h4>System Extensibility</h4>
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//       <Icon name='x' size='large' color='grey' />
//     </Grid.Column>
//     <Grid.Column>
//       <h3>Integration and Utility</h3>
//       <h4>Configuration Management</h4>
//       <Icon name='warning circle' size='large' color='orange' />
//       <h4>Data Access and Management</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='x' size='large' color='grey' />
//       <h4>Decision Management</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <h4>Logging</h4>
//       <Icon name='warning circle' size='large' color='orange' />
//       <Icon name='warning circle' size='large' color='orange' />
//     </Grid.Column>
//     <Grid.Column>
//       <h3>Standards and Conditions</h3>
//       <h4>Business Results Condition</h4>
//       <Icon name='x' size='large' color='grey' />
//       <h4>Industry Standards Condition</h4>
//       <Icon name='warning circle' size='large' color='orange' />
//       <h4>Interoperability Condition</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <h4>Leverage Condition (Reuse)</h4>
//       <Icon name='x' size='large' color='grey' />
//       <h4>Modularity Standard</h4>
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='check circle' size='large' color='green' />
//       <Icon name='question circle' size='large' color='blue' />
//       <Icon name='check circle' size='large' color='green' />
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
// <Divider />
