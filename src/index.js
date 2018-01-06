import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Store } from './store';
import { Provider } from 'mobx-react';
import Maps from './map';

ReactDOM.render(
    <Provider {...Store}>
        <Maps></Maps>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
