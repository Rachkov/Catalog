import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// TODO: подчисти файл, если не используешь

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
