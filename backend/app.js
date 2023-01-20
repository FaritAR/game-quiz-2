/* eslint-disable no-console */
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 3000;
const config = require('./config/conifg');
const themeAndQuestions = require('./db/themeAndQuestions');

config(app);

app.get('/api/themeAndQuestions', (req, res) => {
  res.send(themeAndQuestions);
});

const start = async () => {
  try {
    // await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`сервер слушает ${PORT} порт`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
