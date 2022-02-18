import express from 'express';

const app = express();
app.get('/', (req, res) => {
  // Uncomment below to see error.
  // let test = 'test';
  res.send('Hello World!')
})

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});
