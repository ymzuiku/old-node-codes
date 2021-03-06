// export * from './todos';
// export * from './visibilityFilter';

import { combineReducers } from 'redux';
import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';

export const reducers = combineReducers({
  todos,
  visibilityFilter,
});
