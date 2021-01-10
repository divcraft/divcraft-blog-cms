const mongoose = require('mongoose');

const { Schema } = mongoose;

const newsSchema = new Schema(
  {
    user_id: String,
    article_id: String,
    newsType: String,
    commentsCounter: Number,
    reportData: {
      comment_id: String,
      reporterName: String,
      reportContent: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('News', newsSchema);
