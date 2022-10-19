import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { searchRobots } from './reducers';
import { createLogger } from 'redux-logger'

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger)); 
// const store = createStore(rootReducer);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>  
);
// registerServiceWorker();
