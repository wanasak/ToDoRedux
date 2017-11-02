import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { reducer } from './components/ToDoListRedux';


const store = createStore(reducer);

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('ToDoRedux', () => AppWithStore);
