const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    privateEmail: { type: String, required: true },
    divcraftEmail: String,
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    photoUrl: String,
    paragraph1: String,
    paragraph2: String,
    paragraph3: String,
    listItem1: String,
    listItem2: String,
    listItem3: String,
    facebookUrl: String,
    twitterUrl: String,
    linkedinUrl: String,
    instagramUrl: String,
    markedArticles: [{ article_id: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
