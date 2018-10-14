import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Index from './pages';
import Admin from './pages/admin';
import store from './redux/reducer';

const AppRouter = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Index} />
                <Route path="/admin" component={Admin} />
            </div>
        </Router>
    </Provider>
);

export default AppRouter;
