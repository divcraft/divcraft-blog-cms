const { cloudinary } = require('../config/cloudinaryConfig');

const manageImages = async (article) => {
  const manageImage = async (stringImgData) => {
    try {
      const uploadResponse = await cloudinary.uploader.upload(stringImgData, {
        upload_preset: 'div-craft-setup',
      });
      return uploadResponse.public_id;
    } catch (err) {
      return err;
    }
  };
  const updatedHeader = () => {
    if (!article.header.image.isUploaded) {
      return {
        ...article.header,
        image: {
          ...article.header.image,
          data: manageImage(article.header.image.data),
          isUploaded: true,
        },
      };
    }
    return article.header;
  };
  const updatedSections = article.sections.map((section) => {
    const updatedItems = section.items.map((item) => {
      let updatedItem;
      if (item.type === 'IMAGE' && !item.content.isUploaded) {
        updatedItem = {
          ...item,
          content: {
            ...item.content,
            data: manageImage(item.content.data),
            isUploaded: true,
          },
        };
      } else {
        updatedItem = item;
      }
      return updatedItem;
    });
    return {
      ...section,
      items: updatedItems,
    };
  });
  const imagedArticle = {
    header: updatedHeader,
    sections: updatedSections,
  };
  return imagedArticle;
};

module.exports = manageImages;
