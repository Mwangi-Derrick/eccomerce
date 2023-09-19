import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {StateProvider} from './data/StateProvider';
import reducer, { initialState } from './data/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
      </StateProvider>
    </React.StrictMode>
    </BrowserRouter>
);


