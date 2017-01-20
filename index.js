const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
// app.set('view cache', false);
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey' });
});
app.use(express.static(__dirname + '/emberapp/dist'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});