import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actions } from '../status';

/** @constructor */
export let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(actions.addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          type="text"
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);
