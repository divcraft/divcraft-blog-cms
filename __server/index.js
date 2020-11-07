const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('./mongoose');

const articlesRouter = require('./routes/articles.router');
const authorsRouter = require('./routes/authors.router');
const categoriesRouter = require('./routes/categories.router');
const commentsRouter = require('./routes/comments.router');

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

app.use('/api/articles', articlesRouter);
app.use('/api/authors', authorsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/comments', commentsRouter);

app.listen(PORT);
