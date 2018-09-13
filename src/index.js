import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  {
    searchTerm: 'gaearon'
  },
  applyMiddleware(Thunk)
)

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
