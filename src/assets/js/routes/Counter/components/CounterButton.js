import React from 'react';

const { string, func } = React.PropTypes;

const CounterComponentButton = ({
  btnAction,
  btnText,
  }) => (
  <div>
    <button onClick={btnAction}>{btnText}</button>
  </div>
);

CounterComponentButton.propTypes = {
  btnAction: func,
  btnText: string.isRequired,
};

export default CounterComponentButton;
