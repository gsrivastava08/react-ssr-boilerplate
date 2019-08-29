import React from 'react';
import ReactDomHelp from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../client/App';

ReactDomHelp.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
