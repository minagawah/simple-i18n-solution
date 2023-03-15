const createError = require('http-errors');
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
// const fs = require('fs');

const DEV = !!(process.env?.NODE_ENV !== 'production');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/test', (req, res) => res.render('test.njk'));
app.get('/error', (req, res) => res.render('error.njk'));
app.get('/', (req, res) => res.render('index.njk'));

// 404
app.use((req, res, next) => next(createError(404)));

// 500
app.use((err, req, res, next) => {
  const { status = 500, message } = err || {};
  const original = req.originalUrl;

  if (DEV && original !== '/favicon.ico') {
    console.log('[app] URL:', original);

    if (message) {
      console.log('[app] message:', message);
    } else {
      console.log('[app] error:', err);
    }
  }

  res.status(status);
  res.render(message === 'Not Found' ? '404.njk' : 'error.njk');
});

module.exports = app;
