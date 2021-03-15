const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://indexer_1:indexer_1@cluster0.ggmdj.mongodb.net/AFRIKDICO?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  module.exports = {
    client
  };