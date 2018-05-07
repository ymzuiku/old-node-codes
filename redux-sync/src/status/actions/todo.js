let nextTodoID = 0;

const delay = ms => new Promise(resole => setTimeout(resole, ms));

export const addTodo = text => {
  return async function(dispatch) {
    await delay(1000);
    dispatch({
      type: 'ADD_TODO',
      id: nextTodoID++,
      text
    });
  };
};

export const addTodoAsync = async text => {
  await delay(1000);
  return {
    type: 'ADD_TODO',
    id: nextTodoID++,
    text
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
