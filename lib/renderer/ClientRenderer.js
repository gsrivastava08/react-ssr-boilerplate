import React from 'react';
import ReactDomHelp from 'react-dom';
import { HelmetProvider } from '../client/helmetInstance';

import { BrowserRouter } from 'react-router-dom';
import App from '../client/App';

ReactDomHelp.hydrate(
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
    document.getElementById('root')
  );
