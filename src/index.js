import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Index = () => (

  <div className='title'>
    <h1>다이어리</h1>
    <App />
  </div>
)


ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
