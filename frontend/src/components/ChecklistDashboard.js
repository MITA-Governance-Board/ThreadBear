import React from 'react';
import RequirementResult from "./RequirementResult";
import ChecklistViz from "./ChecklistViz";
import { Button, Divider, Dropdown, Menu } from 'semantic-ui-react'

// TODO: Add export functionality
// TODO: Make the dropdown lists filter both the checklist visualization and list of requirements
// TODO: Derive the checklistDropdown options from the test parameters

const checklistDropdown = [
  {text: 'All Checklists', value: 'All Checklists'},
  {text: 'Provider Screening', value: 'Provider Screening'},
  {text: 'Access and Delivery', value: 'Access and Delivery'},
  {text: 'Information Architecture', value: 'Information Architecture'},
  {text: 'Integration and Utility', value: 'Integration and Utility'},
  {text: 'Intermediary and Interface', value: 'Intermediary and Interface'},
  {text: 'Standards and Conditions', value: 'Standards and Conditions'}
]
const statusDropdown = [
  {text: 'All Criteria', value: 'All Criteria'},
  {text: 'Meets', value: 'Meets'},
  {text: 'Partially Meets', value: 'Partially Meets'},
  {text: 'Manual Testing Required', value: 'Manual Testing Required'},
  {text: 'Doesnt Meet', value: 'Doesnt Meet'},
  {text: 'Not Assessed', value: 'Not Assessed'}
]

export default ({ testExecution }) => {
  return (
    <div>
      <ChecklistViz />
      <Divider />
      <Menu text>
        <Menu.Item>
          <Button disabled primary>Export MECT Spreadsheet</Button>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Dropdown disabled placeholder='Filter by Checklist' selection options={checklistDropdown}></Dropdown>
          <Dropdown disabled placeholder='Filter by Status' selection options={statusDropdown}></Dropdown>
        </Menu.Menu>
      </Menu>
      <RequirementResult testExecution={testExecution}/>
    </div>
  );
}
