require('dotenv').config();

const Pool = require('pg').Pool;

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const poolConfig = { connectionString };

const pool = new Pool(poolConfig);

module.exports = pool;
