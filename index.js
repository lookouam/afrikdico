const config = require('./config');
const { client } = require('./mongo');

const express = require('express')
const app = express();

app.get('/', (req, res) => res.redirect(`${config.API_BASE_PATH}`));
app.get(`${config.API_BASE_PATH}`, (req, res) => {
  res.send(`Welcome sur  l'${config.API_BASE_PATH} de AFRIKDICO `)
})

app.get(`${config.API_BASE_PATH}/test`, (req, res) => {
    client.connect(err => {
        if (err) throw err;
        const collection = client.db("afrikdico").collection("languages");
        collection.findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result.name);
          });
      });
      res.send('connection réussie' )
  })

app.listen(config.PORT, '0.0.0.0', () => {
    console.log(`AfricDico listening at http://localhost:${config.PORT}`)
})

module.exports = app;