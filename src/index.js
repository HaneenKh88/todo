import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProvider from './components/auth/context.js';

import App from './App';

function Main () {
   
    return <App />;
   
  
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <LoginProvider>
    <Main />
   </LoginProvider>
, rootElement);
