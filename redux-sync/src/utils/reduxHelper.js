import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

export function createThunkLoggerStore(theReducer) {
  const loggerMiddleware = createLogger();
  return createStore(
    theReducer,
    applyMiddleware(
      thunkMiddleware, // 允许我们 dispatch() 函数
      loggerMiddleware, // 一个很便捷的 middleware，用来打印 action 日志
    ),
  );
}

export function createThunkStore(theReducer) {
  return createStore(
    theReducer,
    applyMiddleware(thunkMiddleware, // 允许我们 dispatch() 函数
    ),
  );
}

export { Provider };
