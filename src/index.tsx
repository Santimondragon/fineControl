import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import * as React from 'react';
import { render } from 'react-dom';

import { Root } from './containers/Root/Root';

render(
  <Root />,
  document.getElementById('root')
);