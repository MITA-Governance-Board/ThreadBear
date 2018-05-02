import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import resourceAction from '../actions/resourceAction';

class Requirements extends Component {
  componentDidMount() {
    this.props.listRequirements();
  }

  render() {
    return (
      <div>
        <h1> Requirements </h1>
        {this.props.requirements.map(s => {
          return (
            <div>{s.id} - {s.description}</div>
          )
        })}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    listRequirements: resourceAction('requirements', ['list']).list,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    requirements: _.values(state.requirement),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Requirements);
