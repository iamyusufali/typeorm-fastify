const express = require('express');
const { v4: uuid } = require('uuid');

const pgPool = require('./database/config');
const { hashPassword } = require('./utils/hashPassword');

hashPassword('Test@1234!').then((data) => {
  console.log(data);
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/userData', (request, response) => {
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

// app.post('/user/register', (request, response) => {
//   const id = uuid();
//   const email = request.body.email;
//   const email_constraint = email;
//   const first_name = request.body.first_name;
//   const last_name = request.body.last_name;
//   const username = request.body.username;

//   if (!username) return response.sendStatus(404);

//   const userQuery =
//     'INSERT INTO user_entity (id, email, email_constraint, enabled, first_name, last_name, realm_id, username, created_timestamp)';

//   const credsQuery =
//     'INSERT INTO public.credential (id, type, user_id, created_date, secret_data, credential_data, priority)';

//   pgPool.query(
//     userQuery,
//     [
//       id,
//       email,
//       email_constraint,
//       true,
//       first_name,
//       last_name,
//       'React Auth Test',
//       username,
//       Math.round(Date.now() / 1000),
//     ],
//     (userErr, userRes) => {
//       if (userErr) throw Error(userErr);

//       response.status(200).json({
//         user_data: userRes?.rows?.[0],
//         // credentials: credsRes.rows[0],
//       });

//       // pgPool.query(credsQuery, [userRes.rows[0].id], (credsErr, credsRes) => {
//       //   if (credsErr) throw error;

//       //   response.status(200).json({
//       //     user_data: userRes.rows[0],
//       //     credentials: credsRes.rows[0],
//       //   });
//       // });
//     }
//   );
// });

app.delete('/user/:id', (req, res) => {
  const id = req.params.id;

  pgPool.query('DELETE FROM user_entity WHERE id = $1', [id], (err, result) => {
    if (err) throw Error(err);

    res.send({ message: 'User removed successfully.' });
  });
});

app.listen(PORT, () => console.log(`Server running at Port: ${PORT}`));
