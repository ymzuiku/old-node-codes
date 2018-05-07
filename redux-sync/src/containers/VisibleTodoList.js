import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { actions } from '../status';
/**
 * 
 * 
 * @param {any} todos 
 * @param {any} filter 
 * @returns 
 */
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};
/**
 * 
 * 
 * @param {any} state 
 * @returns 
 */
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};
/**
 * 
 * 
 * @param {any} dispatch 
 * @returns 
 */
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(actions.toggleTodo(id));
    }
  };
};

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(
  TodoList
);
