import express from 'express';
import config from './config';
import serverRender from './renderer/ServerRenderer';
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  const initialContent = {};
  const {initialMarkup, helmet, context} =  serverRender(initialContent, req);
  if (context.url) {
    return res.redirect(301, context.url);
  }else{
    res.render('index', { initialMarkup, initialContent, helmet });
  }
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on: ${config.port}...`);
});

//https://alligator.io/react/react-router-ssr/