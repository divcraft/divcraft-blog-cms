const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const passport = require('passport');
const mongoose = require('./mongoose');
const passportConfig = require('./config/passportConfig');

const articlesRouter = require('./routes/articles.router');
const usersRouter = require('./routes/users.router');
const categoriesRouter = require('./routes/categories.router');
const commentsRouter = require('./routes/comments.router');
const notificationsRouter = require('./routes/notifications.router');
const authRouter = require('./routes/auth.router');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
mongoose();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use('/api/articles', articlesRouter);
app.use('/api/users', usersRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/auth', authRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
  });
} else {
  app.get('*', (req, res) => {
    res.redirect('http://localhost:3000');
  });
}

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('Server is ready to work'));
