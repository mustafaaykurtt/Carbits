import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './container/App';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


