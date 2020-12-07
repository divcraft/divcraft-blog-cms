const sendError = (err, res) => {
  res.status(500).send('Server error appeared.');
  throw err;
};

module.exports = sendError;
