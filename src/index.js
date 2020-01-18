import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {AppComponent} from './App';
import { Provider } from 'react-redux';
import { store } from './store/root.reducer';

ReactDOM.render(
    <Provider store={ store }>
        <AppComponent />
    </Provider>, 
document.getElementById('root'));