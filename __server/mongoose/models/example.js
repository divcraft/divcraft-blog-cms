const mongoose = require('mongoose');

const { Schema } = mongoose;

const exampleSchema = new Schema({
  content: { type: String, required: true },
});

module.exports = mongoose.model('Example', exampleSchema);
