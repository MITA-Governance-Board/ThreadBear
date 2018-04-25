import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store'
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

const store = Store({})

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
