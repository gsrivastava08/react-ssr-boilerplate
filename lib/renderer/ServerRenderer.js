import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../build/client/App';

const serverRender = (store) => {  
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    )
  };
};

export default serverRender;
