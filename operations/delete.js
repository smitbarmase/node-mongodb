// DELETE

// Delete one document.

db.collection('users').deleteOne({
  name: 'Mellow'
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

// Delete nultiple documents.

db.collection('users').deleteMany({
  name: 'Mellow'
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
