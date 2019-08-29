import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from '../client/helmetInstance';
import App from '../client/App';

const serverRender = (store, req) => {
  const context = {};  
  const helmetContext = {};
  const initialMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <HelmetProvider context={helmetContext}>
          <App store={store} />
        </HelmetProvider>
      </StaticRouter>
    );

  const { helmet } = helmetContext;
  return {
    initialMarkup,
    helmet,
    context
  };
};

export default serverRender;
