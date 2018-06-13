import React, { Component } from 'react';

import { Form, Grid, Icon, Segment } from 'semantic-ui-react';

import Validation from './Validation';
import StatusIcon from './StatusIcon';
import RequirementResultDetail from './RequirementResultDetail';

export default class ChecklistItem extends Component {
    state = { visible: false }
    handleVisibility = () => this.setState({ visible: !this.state.visible })


    render() {
      const { visible } = this.state;
      const { requirement, failures, validations, validationInstances, manualTesting } = this.props;
    
      const requirementValidations = requirement.validation_ids.map(id => validations[id]);
      const requirementValidationInstances = requirement.validation_ids.map(id => validationInstances[id])
     
      return (
            <Segment>
                <Grid>
                    <Grid.Column width={1}>
                    {/* TODO: correct aria */}
                        <Form.Button circular compact icon aria-label='Expand TA.BA.10' content={
                            visible ? <Icon fitted name='chevron down' /> : <Icon fitted name='chevron right' />}
                            onClick={this.handleVisibility}
                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        {requirement.checklist_id}
                    </Grid.Column>
                    <Grid.Column width={10}>
                        {requirement.description}
                    </Grid.Column>

                    <Grid.Column width={3}>
                        <StatusIcon failures={failures} />
                    </Grid.Column>
                </Grid>
                {visible && <RequirementResultDetail requirement={requirement} validations={requirementValidations} failures={failures} validationInstances={requirementValidationInstances} manualTesting={manualTesting}/>}
            </Segment>
      );
    }
}
