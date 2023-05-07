const express = require('express');
const pg = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//connecting to heroku database
const pool = new pg.Pool({
  connectionString: "postgres://taonknyscfdcbt:8d2638d1e2373a9ee7e1cbdb2afa5bd3d27256e75c4647fef7c8e4a82f314b28@ec2-35-169-9-79.compute-1.amazonaws.com:5432/d7r31vn4qfsn53",
  ssl: {
    rejectUnauthorized: false
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/hadith/today', (req, res) => {
  pool.query('SELECT * FROM hadithlist WHERE released_already IS FALSE ORDER BY RANDOM() LIMIT 1', (err, result) => {
    if (err) {
      res.status(500).send('Internal server error');
    }
    res.send(result.rows);
  });
});


