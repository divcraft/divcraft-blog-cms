const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dmlal5qyb',
  api_key: '975988125375217',
  api_secret: 'z_Hdya1hJHXGCApIbj8fKJJqO7Y',
  // cloud_name: process.env.CLOUDINARY_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };
