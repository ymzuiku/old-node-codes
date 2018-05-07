import React, { PureComponent } from 'react';
/**
 * 
 * 
 * @param {any} { onClick, completed, text } 
 */
export const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >{text}</li>
);

