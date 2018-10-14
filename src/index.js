import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import AppRouter from './AppRouter';

ReactDOM.render(<AppRouter />, document.querySelector('#root'));
registerServiceWorker();
