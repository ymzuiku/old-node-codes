import React, { PureComponent } from 'react';
import { Todo } from './Todo';

/**
 *
 *
 * @param {any} { todos, onTodoClick }
 */
export const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => {
          onTodoClick(todo.id);
        }}
      />
    ))}
  </ul>
);
