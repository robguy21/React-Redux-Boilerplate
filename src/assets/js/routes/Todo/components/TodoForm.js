import React from 'react';

const { func } = React.PropTypes;

const TodoForm = ({ formAction }) => {
  let inputValue;

  const storeit = (value) => {
    inputValue = value;
    return true;
  };

  const getit = () => (inputValue);

  return (
    <form
      onSubmit={
        function onsubmit(e) {
          e.preventDefault();
          formAction(getit());
        }
      }
    >

      <label>Add Todo</label>
      <input
        type="text"
        value={inputValue}
        onChange={
          function update(e) {
            storeit(e.target.value);
          }
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};

TodoForm.propTypes = {
  formAction: func,
};


export default TodoForm;
