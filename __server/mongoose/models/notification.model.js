const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationSchema = new Schema(
  {
    user_id: String,
    article_id: String,
    notificationType: String,
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

module.exports = mongoose.model('Notification', notificationSchema);
