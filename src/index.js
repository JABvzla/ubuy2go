import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/reducer';

ReactDOM.render(<Index store={store} />, document.querySelector('#root'));
registerServiceWorker();
