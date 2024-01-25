const fs = require('fs');
const jokes = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/test.json`, 'utf-8')
);
exports.getAllJokes = (req, res) => {
  res.status(200).header('Content-Type', 'text/html').json(jokes);
};
