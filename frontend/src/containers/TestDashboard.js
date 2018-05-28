import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Tab } from 'semantic-ui-react';
import ServerTest from '../components/ServerTest';
import Header from '../components/Header';
import ChecklistDashboard from '../components/ChecklistDashboard';
import resourceAction from '../actions/resourceAction';

class TestExecutionShow extends Component {

  componentDidMount() {
    this.props.getTestExecution(this.props.match.params.id);
  }

  render() {
    if (!this.props.testExecututions) {
      return null;
    }
    const testExecution = this.props.testExecututions[this.props.match.params.id];

    const panes = [
      { menuItem: 'MECT Checklists', render: () => <Tab.Pane><ChecklistDashboard testExecution={testExecution}/></Tab.Pane> },
      { menuItem: 'Poplin Conformance', render: () => <Tab.Pane>Nothing to see here. Move along...</Tab.Pane> },
      { menuItem: 'Security', render: () => <Tab.Pane>Nothing to see here. Move along...</Tab.Pane> },
      { menuItem: 'Performance', render: () => <Tab.Pane>Nothing to see here. Move along...</Tab.Pane> },
    ];

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
  
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTestExecution: resourceAction('requirement_instances', ['get']).get
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    testExecututions: state.requirementInstance
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestExecutionShow);
