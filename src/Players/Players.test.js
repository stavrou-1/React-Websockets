import React from 'react';
import ReactDOM from 'react-dom';
import Players from './Players';

it('renders the players component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Players/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
