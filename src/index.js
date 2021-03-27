
import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './App.js';
import Login from './login.js';
import UserComp from './userComp.js';
import PassComp from './passComp.js';
import SubmitComp from './submitComp.js';
import TodoComponent from './TodoComponent.js';
import Products from './Products.js';

import ReduxLogin from './ReduxLogin';
import ReduxToDo from './ReduxToDo';
import ShoppingPortal from './ShoppingPortal'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';
import reducerTodo from './store/reducerTodo';
import reducerShop from './store/reducerShop';
import App from './App';
import NotesLogin from './NotesLogin';
const store = createStore(reducer);
const storeTodo = createStore(reducerTodo);
const storeShop = createStore(reducerShop);
ReactDOM.render(
    <React.StrictMode>
      <NotesLogin />
    </React.StrictMode>,
    document.getElementById('root')
  );
 