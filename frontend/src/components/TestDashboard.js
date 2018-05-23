import React from 'react';
import ServerTest from "./ServerTest"
import Header from "./Header"
import ChecklistDashboard from "./ChecklistDashboard";
import { Container, Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'MECT Checklists', render: () => <Tab.Pane><ChecklistDashboard /></Tab.Pane> },
  { menuItem: 'Poplin Conformance', render: () => <Tab.Pane>Nothing to see here. Move along...</Tab.Pane> },
  { menuItem: 'Security', render: () => <Tab.Pane>Nothing to see here. Move along...</Tab.Pane> },
  { menuItem: 'Performance', render: () => <Tab.Pane>Nothing to see here. Move along...</Tab.Pane> },
]

export default () => {
  return (
    <div role='main'>
      <Header />
      <ServerTest />
      <Container>
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className='testTabs'
        />
      </Container>
    </div>
  );
}
