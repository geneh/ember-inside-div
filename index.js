const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey' });
});
app.get('/spa', (req, res) => {
  res.render('spa');
});
app.use(express.static(__dirname + '/emberapp/dist'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});