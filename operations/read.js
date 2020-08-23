// READ

// Fetch a document.
db.collection('users').findOne({ name: 'Moka' }, (error, user) => {
  if (error) {
    return console.log('Unable to fetch.');
  }
  console.log(user);
});

// Fetch multiple documents.
db.collection('users').find({ age: 20 }).toArray((error, user) => {
  if (error) {
    return console.log('Unable to fetch.');
  }
  console.log(user);
});