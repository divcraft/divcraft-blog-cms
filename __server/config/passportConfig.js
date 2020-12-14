const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Author = require('../mongoose/models/author.model');

module.exports = () => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      Author.findOne({ username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user || user.password !== password) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );
};
