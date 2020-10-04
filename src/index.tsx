// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Timer from './components/Timer';
import Counter from './components/Counter';

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter />
    <Timer limit={100} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
