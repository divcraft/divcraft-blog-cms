const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('./mongoose');

const testRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
mongoose();

app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('/ ', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
  });
}

app.use('/api', testRouter);

app.listen(PORT);
