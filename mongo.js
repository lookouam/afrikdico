const {MongoClient} = require('mongodb')
const config = require('./config');
const uri = `mongodb+srv://${config.mongo.user}:${config.mongo.password}@${config.mongo.url}/${config.mongo.database}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

findAll = (database, document) => {
  client.connect(err => {
    if (err) throw err;
    const collection = client.db(database).collection(document);
    collection.findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
  });
}
  module.exports = {
    client, 
    findAll
  };