const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Author = require('../mongoose/models/author.model');

module.exports = () => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      Author.findOne({ username }, (err, user) => {
        if (err) return done(err);
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    Author.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
