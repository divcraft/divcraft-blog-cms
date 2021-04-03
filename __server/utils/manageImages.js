const { cloudinary } = require('../config/cloudinaryConfig');

const manageImages = async (article) => {
  const manageImage = (stringImgData) => {
    return cloudinary.uploader.upload(stringImgData, {
      upload_preset: 'div-craft-setup',
    });
  };
  const updateHeader = async () => {
    if (!article.header.image.isUploaded) {
      const imageData = (await manageImage(article.header.image.data))
        .public_id;
      return {
        ...article.header,
        image: {
          ...article.header.image,
          data: imageData,
          isUploaded: true,
        },
      };
    }
    return article.header;
  };
  const updateSections = () => {
    const updatedSections = article.sections.map((section) => {
      const updatedItems = section.items.map(async (item) => {
        let updatedItem;
        if (item.type === 'IMAGE' && !item.content.isUploaded) {
          const imageData = (await manageImage(item.content.data)).public_id;
          updatedItem = {
            ...item,
            content: {
              ...item.content,
              data: imageData,
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
    return updatedSections;
  };

  const imagedArticle = {
    header: await updateHeader(),
    sections: await updateSections(),
  };
  return imagedArticle;
};

module.exports = manageImages;