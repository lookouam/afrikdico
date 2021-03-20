const config = require('./config');
const { client } = require('./mongo');

const express = require('express')
const app = express();

app.get('/', (req, res) => res.redirect(`${config.API_BASE_PATH}`));
app.get(`${config.API_BASE_PATH}`, (req, res) => {
  res.send(`Welcome sur  l'${config.API_BASE_PATH} de AFRIKDICO `)
})

app.get(`${config.API_BASE_PATH}/test`, (req, res) => {
      findAll(config.mongo.database, "languages");
      res.send('connection réussie' )
  })

app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
    console.log(`AfricDico listening at http://localhost:${process.env.PORT || config.PORT}`)
})

module.exports = app;