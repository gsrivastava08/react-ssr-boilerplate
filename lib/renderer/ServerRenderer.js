import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from '../client/helmetInstance';
import App from '../client/App';

const serverRender = (store) => {  
  const initialMarkup = ReactDOMServer.renderToString(<App store={store} />);
  const helmet = Helmet.renderStatic();
  return {
    initialMarkup,
    helmet
  };
};

export default serverRender;
