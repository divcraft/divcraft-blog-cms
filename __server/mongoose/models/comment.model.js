const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    authorName: { type: String, required: true },
    authorEmail: { type: String, required: true },
    authorImg: String,
    content: { type: String, required: true },
    likesNumber: Number,
    isWrittenByArticleAuthor: { type: Boolean, default: false },
    isReported: { type: Boolean, default: false },
    response: {
      isResponsed: Boolean,
      mainComment_id: String,
    },
    deletion: {
      isDeleted: Boolean,
      deletionReason: String,
      deletionDate: Date,
      deletionAuthor_id: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Comment', commentSchema);
