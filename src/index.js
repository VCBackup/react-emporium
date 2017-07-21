import {Component} from 'react';
import {ReactDOM} from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';
import App from './components/App/App';
import Login from './components/Login/Login';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' Component={App}>
            </Route>
            <Route path='/login' Component={Login}>
            </Route>
        </Router>
</Provider>,
reactNode);