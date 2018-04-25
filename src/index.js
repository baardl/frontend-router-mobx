import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TestStore from "./TestStore";
import {Provider} from "mobx-react";
import GithubStore from "./GithubStore";
import ShareprocStore from "./ShareprocStore";

import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
    test: new TestStore(),
    github: new GithubStore(),
    shareproc: new ShareprocStore(),
    routing: routingStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

// All our stores are listed here
function createStores(state, token) {

    return {
        test: new TestStore(),
        github: new GithubStore(),
        shareproc: new ShareprocStore(),
        routing: routingStore,
    }
}

ReactDOM.render(
    <Provider {...stores}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

// Initialize actions and state
export default (typeof window !== "undefined" ? createStores(window.__STATE) : createStores)
