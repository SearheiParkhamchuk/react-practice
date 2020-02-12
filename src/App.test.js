import React from 'react';
import ReactDOM from 'react-dom';
import TestContainerApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestContainerApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
