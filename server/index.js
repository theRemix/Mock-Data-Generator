const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const {
  people,
  planets,
  starships,
} = require('./generator');

app.use(express.static('./public'));

app.get('/api/people', (req, res) => res.json.call(res, people()) );

app.get('/api/planets', (req, res) => res.json.call(res, planets()) );

app.get('/api/starships', (req, res) => res.json.call(res, starships()) );

app.listen(PORT, _ => console.log(`Server listening on http://localhost:${PORT}`) );
