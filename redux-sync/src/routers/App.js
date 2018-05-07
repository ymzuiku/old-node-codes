import React, { Component } from 'react';
import { Footer } from '../components';
import { AddTodo, VisibleTodoList } from '../containers';
import { connect } from 'react-redux';
/**
 *
 *
 * @param {any} { ...props }
 * @returns
 */
export const App = ({ ...props }) => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};
