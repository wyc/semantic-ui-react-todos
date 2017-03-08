import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const store = createStore(reducer)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
