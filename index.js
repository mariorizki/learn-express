const express = require('express');
const app = express();
const port = 8000;

const users = [
  {
    id: 1,
    name: 'Mario'
  },
  {
    id: 2,
    name: 'Fahri'
  },
  {
    id: 3,
    name: 'Sakti'
  },
  {
    id: 4,
    name: 'Ajin'
  },
  {
    id: 5,
    name: 'Bara'
  },
  {
    id: 6,
    name: 'Jo'
  }
];

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!'
  });
});

app.get('/users', (req, res) => {
  res.send({
    message: 'List of Users',
    data: users
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
