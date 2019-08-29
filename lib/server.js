import express from 'express';
import config from './config';
import serverRender from './renderer/ServerRenderer';
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  const initialContent = {};
  const {initialMarkup, helmet} =  serverRender(initialContent);
  res.render('index', { initialMarkup, initialContent, helmet });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on: ${config.port}...`);
});
