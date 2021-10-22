const crypto = require('crypto');
const promisify = require('./promisify');
const pbkdf2 = promisify(crypto.pbkdf2);

const OPTIONS = {
  iterations: 27500,
  keylen: 64,
  digest: 'sha256',
};

const myHasher = async (password) => {
  const { iterations, keylen, digest } = OPTIONS;

  const promise = new Promise((resolve) =>
    resolve(Buffer.from('ffOxaNmO/r5qBmLLHEE1OQ==', 'base64'))
  );

  return promise
    .then((saltBuf) => {
      salt = saltBuf.toString('base64');
      return pbkdf2(String(password), saltBuf, iterations, keylen, digest);
    })
    .then((buf) => {
      const hash = buf.toString('base64');
      return hash;
    });
};

myHasher('password').then((hash) => console.log(hash));
