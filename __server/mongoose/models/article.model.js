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
        sectionPosition: { type: String, required: true },
        title: { type: String, required: true },
        items: [
          {
            itemPosition: { type: Number, required: true },
            type: { type: String, required: true },
            content: String,
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
