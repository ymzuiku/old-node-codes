import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { reducers } from './status/reducers';
import registerServiceWorker from './registerServiceWorker';
import { App } from './routers';
import { Provider, createThunkLoggerStore } from './utils/reduxHelper';

const store = createThunkLoggerStore(reducers);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
