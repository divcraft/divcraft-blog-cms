const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    author_id: String,
    category_id: String,
    averageRating: { type: Number, default: 0 },
    ratersNumber: { type: Number, default: 0 },
    isFinished: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: false },
    publicationDate: Date,
    header: {
      title: { type: String, required: true },
      subtitle: String,
      imageUrl: String,
    },
    sections: [
      {
        priority: Number,
        title: { type: String, required: true },
        body: [
          {
            subtitle: String,
            paragraph: String,
            codeSnippet: String,
            image: String,
            list: [
              {
                priority: Number,
                content: String,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Article', articleSchema);
