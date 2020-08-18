import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Main } from './pages/main';

import 'reset-css';

if (process.env.LOCAL) {
  // eslint-disable-next-line global-require
  const { createInspector } = require('effector-logger/inspector');

  createInspector();
}

ReactDOM.render(<Main />, document.getElementById('root'));
