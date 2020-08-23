// CREATE

// Insert one document.
db.collection('users').insertOne({
  name: 'Mellow',
  age: 20
}, (error, result) => {
  if (error) {
    return console.log('Unable to insert user.');
  }
  console.log(result.ops);
});

// Insert in bulk!
db.collection('users').insertMany([{
  name: 'Bella',
  age: 19
}, {
  name: 'Joe',
  age: 21
}], (error, result) => {
  if (error) {
    return console.log('Unable to insert users.');
  }
  console.log(result.ops);
});