import React from 'react';
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import store from './app/store'
import { Provider } from 'react-redux'
import App from './App'
import Hello from './Hello'; 


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
  <Hello/>
  </Provider>
);

