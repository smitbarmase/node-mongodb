const { MongoClient } = require('mongodb');

const connnectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'node-mongodb';

MongoClient.connect(connnectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect.');
  }

  console.log('Connected.');

  const db = client.db(databaseName);

  // Use functions from create.js, read.js, update.js, delete.js here.



});