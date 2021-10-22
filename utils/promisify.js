const promisify =
  (fn) =>
  (...args) =>
    new Promise((resolve, reject) =>
      fn(...args, (err, ...res) => (err ? reject(err) : resolve(...res)))
    );

module.exports = promisify;
