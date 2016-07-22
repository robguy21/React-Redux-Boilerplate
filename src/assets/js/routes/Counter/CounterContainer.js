import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CounterComponentButton from './components/CounterButton.js';
import * as CounterActions from './actions/CounterActions.js';

const { number, object } = React.PropTypes;

const Counter = ({ counter, actions }) => (
  <div>
    <h2>Welcome Home</h2>
    <CounterComponentButton btnText="Increment State" btnAction={actions.add} />
    <CounterComponentButton btnText="Decrement State" btnAction={actions.remove} />
    <p>Current Value is: {counter}</p>
  </div>
);

const mapStateToProps = (state) => (
  { counter: state.CounterReducer.counter }
);

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(CounterActions, dispatch),
  }
);

Counter.propTypes = {
  counter: number.isRequired,
  actions: object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
