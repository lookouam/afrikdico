const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://loic:toto123@cluster0.qamgt.mongodb.net/totodb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
 if(err) return   console.log('loic -> ',err);
  const collection = client.db("totodb").collection("test");
  // perform actions on the collection object
  client.close();
});