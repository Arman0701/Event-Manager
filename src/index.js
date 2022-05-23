import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EventItems from './components/EventItems';
import EventList from './components/EventList';
import { Provider } from 'react-redux'
import {store} from './store/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <EventItems/>
  {/* <App /> */}
  </Provider>,
  </React.StrictMode>
);

