import express from 'express';
import path from 'path';

const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './app.html'));
})

app.use('/scripts', express.static('./components'));
// app.use('/build', express.static('../build'));

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});
