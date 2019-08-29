import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from '../client/helmetInstance';
import App from '../client/App';

const serverRender = (store, req) => {
  const context = {};  
  const initialMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App store={store} />
      </StaticRouter>
    );

  const helmet = Helmet.renderStatic();
  return {
    initialMarkup,
    helmet,
    context
  };
};

export default serverRender;
