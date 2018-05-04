import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import resourceAction from '../actions/resourceAction';

class Sources extends Component {
  componentDidMount() {
    this.props.listSources();
  }

  render() {
    return (
      <div>
        <h1> Sources </h1>
        {this.props.sources.map(s => {
          return (
            <div>{s.name} - {s.type}</div>
          )
        })}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  const source = resourceAction('sources', ['list', 'get']);
  return bindActionCreators({
    listSources: source.list,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    sources: _.values(state.source),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
