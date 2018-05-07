import React, { Component } from 'react';
import { Container, Form, Grid, Icon, Segment } from 'semantic-ui-react'
import RequirementResultDetail from "./RequirementResultDetail";

export default class RequirementResult extends Component {
  state = { visible: false }

  // TODO: Use the examples here to create conditional renders based on requirement status
  // TODO: Fix the Requirement expansion so it only works on one requirement

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Container>
          <h2 className='checklistTitle'>Checklist Title</h2>
          <h3>Category</h3>
          <Segment color='red'>
            <Grid columns='equal' verticalAlign='middle'>
              <Grid.Column width={1}>
                <Form.Button circular compact icon aria-label='Expand TA.BA.10' content={
                  visible ? <Icon fitted name='chevron down'/> : <Icon fitted name='chevron right'/>}
                  onClick={this.handleVisibility}
                />
              </Grid.Column>
              <Grid.Column width={2}>TA.BA.10
              </Grid.Column>
              <Grid.Column width={10}>
                The system of interest collects and stores data needed to produce reports consistent with data collection plan to assess quality and appropriateness of care furnished to participants of the waiver program.
              </Grid.Column>
              <Grid.Column width={1}>
                <Icon name='remove circle' size='big' color='red' />
              </Grid.Column>
              <Grid.Column>
                Doesnt Meet
              </Grid.Column>
            </Grid>
            {visible && <RequirementResultDetail />}
          </Segment>
          <Segment color='orange'>
            <Grid columns='equal' verticalAlign='middle'>
              <Grid.Column width={1}>
                <Form.Button circular compact icon aria-label='Expand TA.BA.2' content={
                  visible ? <Icon fitted name='chevron down'/> : <Icon fitted name='chevron right'/>}
                  onClick={this.handleVisibility}
                />
              </Grid.Column>
              <Grid.Column width={2}>TA.BI.2
              </Grid.Column>
              <Grid.Column width={10}>
              The system of interest supports a range of analysis actions. (These include benefit modeling, utilization management, provider-member-MCO profiling, program planning, forecasting, program assessment, provider or contractor performance, quality assurance, fraud detection, comparison of fee-for-service and managed care, statistical analysis, comparative analysis, financial trends, case-mix adjustments within time ranges specified in the APD and/or RFP, and other functions as described in the APD and/or RFP.)
              </Grid.Column>
              <Grid.Column width={1}>
                <Icon name='warning circle' size='big' color='orange' />
              </Grid.Column>
              <Grid.Column>
                Partially Meets
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment color='blue'>
            <Grid columns='equal' verticalAlign='middle'>
              <Grid.Column width={1}>
                <Form.Button circular compact icon aria-label='Expand TA.BA.4' content={
                  visible ? <Icon fitted name='chevron down'/> : <Icon fitted name='chevron right'/>}
                  onClick={this.handleVisibility}
                />
              </Grid.Column>
              <Grid.Column width={2}>TA.BI.4
              </Grid.Column>
              <Grid.Column width={10}>
                The system of interest collects and summarizes data for specific user communities (e.g. data marts or cubes) such as program analysis staff, research group, financial management unit, agency executives (e.g. dashboard).
              </Grid.Column>
              <Grid.Column width={1}>
                <Icon name='question circle' size='big' color='blue' />
              </Grid.Column>
              <Grid.Column>
                Manual Testing Required
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment color='green'>
            <Grid columns='equal' verticalAlign='middle'>
              <Grid.Column width={1}>
                <Form.Button circular compact icon aria-label='Expand TA.BA.5' content={
                  visible ? <Icon fitted name='chevron down'/> : <Icon fitted name='chevron right'/>}
                  onClick={this.handleVisibility}
                />
              </Grid.Column>
              <Grid.Column width={2}>TA.BI.5
              </Grid.Column>
              <Grid.Column width={10}>
                The system of interest provides reports that allow users to drill down from summarized data to detailed data.
              </Grid.Column>
              <Grid.Column width={1}>
                <Icon name='check circle' size='big' color='green' />
              </Grid.Column>
              <Grid.Column>
                Meets
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment color='grey'>
            <Grid columns='equal' verticalAlign='middle'>
              <Grid.Column width={1}>
                <Form.Button circular compact icon aria-label='Expand TA.BA.7' content={
                  visible ? <Icon fitted name='chevron down'/> : <Icon fitted name='chevron right'/>}
                  onClick={this.handleVisibility}
                />
              </Grid.Column>
              <Grid.Column width={2}>TA.BI.7
              </Grid.Column>
              <Grid.Column width={10}>
                The system of interests business intelligence information is consistent and reliable with full automation.
              </Grid.Column>
              <Grid.Column width={1}>
                <Icon name='x' size='big' color='grey'/>
              </Grid.Column>
              <Grid.Column>
                Not Assessed
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns='equal' verticalAlign='middle'>
              <Grid.Column width={1}>
                <Form.Button circular compact icon aria-label='Expand TA.BA.9' content={
                  visible ? <Icon fitted name='chevron down'/> : <Icon fitted name='chevron right'/>}
                  onClick={this.handleVisibility}
                />
              </Grid.Column>
              <Grid.Column width={2}>TA.BI.9
              </Grid.Column>
              <Grid.Column width={10}>
                The system of interest limits access to authorized group of stakeholders.
              </Grid.Column>
              <Grid.Column width={1}>
                <Icon loading name='circle notched' size='big' color='grey' />
              </Grid.Column>
              <Grid.Column>
                In Progress...
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
