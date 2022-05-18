import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Icon from './Icon';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Icon />,
  document.getElementById('child')
);
