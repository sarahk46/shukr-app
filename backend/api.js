const express = require('express');
const pg = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//connecting to heroku database
const pool = new pg.Pool({
  connectionString: "postgres://rhwmwytrjijkpk:baba63004d40592a5ad62d722b3e47fa91e628f40738380bff9fedf398e21aff@ec2-35-172-26-41.compute-1.amazonaws.com:5432/d4gmqi8p3vrjd7",
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.static("public"));

app.get('/hadith/today', (req, res) => {
  pool.query('SELECT * FROM hadithlist WHERE released_already IS FALSE ORDER BY RANDOM() LIMIT 1', (err, result) => {
    if (err) {
      res.status(500).send('Internal server error');
    }
    res.send(result.rows);
  });
});

// app.post('/users', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Create a new user account in Firebase Authentication
//     const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

//     // Save the user information to the Postgres database
//     const query = 'INSERT INTO users (uid, email) VALUES ($1, $2)';
//     const values = [userCredential.user.uid, email];
//     await pool.query(query, values);

//     res.sendStatus(201);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${19000}`);
});

module.exports = app;
