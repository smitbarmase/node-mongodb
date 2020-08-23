// UPDATE

// Update a document.
db.collection('users').updateOne({
  name: 'Moka' // Field to update.
}, {
  $set: {
    name: 'Voila' // Updated field.
  }
}).then((user) => {
  console.log(user);
}).catch((error) => {
  console.log(error);
});

// Update multiple documents.
db.collection('users').updateMany({
  age: 20
}, {
  $set: {
    age: 30
  }
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});