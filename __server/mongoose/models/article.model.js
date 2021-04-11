const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    user_id: String,
    category_id: String,
    averageRating: { type: Number, default: 0 },
    ratersNumber: { type: Number, default: 0 },
    isFinished: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: false },
    publicationDate: Date,
    header: {
      title: { type: String, required: true },
      subtitle: String,
      image: {
        data: String,
        alt: String,
        isUploaded: Boolean,
      },
    },
    sections: [
      {
        title: { type: String, required: true },
        body: [
          {
            subtitle: String,
            paragraph: String,
            codeSnippet: String,
            image: {
              data: String,
              alt: String,
            },
            list: [
              {
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
