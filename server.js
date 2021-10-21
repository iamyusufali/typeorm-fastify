const express = require('express');
const app = express();

const pgPool = require('./database/config');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (request, response) => {
  const username = request.body.username;

  if (!username) return response.sendStatus(404);

  const userQuery = 'SELECT * FROM user_entity WHERE username = $1';
  const credsQuery = 'SELECT * FROM credential WHERE user_id = $1';

  pgPool.query(userQuery, [username], (userErr, userRes) => {
    if (userErr) throw error;

    pgPool.query(credsQuery, [userRes.rows[0].id], (credsErr, credsRes) => {
      if (credsErr) throw error;

      response.status(200).json({
        user_data: userRes.rows[0],
        credentials: credsRes.rows[0],
      });
    });
  });
});

app.listen(PORT, () => console.log(`Server running at Port: ${PORT}`));
