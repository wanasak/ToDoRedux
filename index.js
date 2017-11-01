import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';

import App from './App';
import { reducer } from './components/ToDoListRedux';


const store = createStore(reducer);

const AppWithStore = () => <App store={store} />

AppRegistry.registerComponent('ToDoRedux', () => AppWithStore);
