const { cloudinary } = require('../config/cloudinaryConfig');

const manageImages = async (article, deletedPhotos) => {
  if (deletedPhotos && deletedPhotos.length > 0) {
    await cloudinary.api.delete_resources(deletedPhotos);
  }
  const manageImage = async (stringImgData) => {
    return cloudinary.uploader.upload(stringImgData, {
      upload_preset: 'div-craft-setup',
    });
  };
  const updateHeader = async () => {
    if (!article.header.image.isUploaded && article.header.image.data) {
      const imageData = await manageImage(article.header.image.data);
      return {
        ...article.header,
        image: {
          ...article.header.image,
          data: imageData.public_id,
          isUploaded: true,
        },
      };
    }
    return article.header;
  };
  const updateSections = async () => {
    const updatedSections = await Promise.all(
      article.sections.map(async (section) => {
        const updatedItems = await Promise.all(
          section.items.map(async (item) => {
            if (
              item.type === 'IMAGE' &&
              !item.content.isUploaded &&
              item.content.data
            ) {
              const imageData = await manageImage(item.content.data);
              return {
                ...item,
                content: {
                  ...item.content,
                  data: imageData.public_id,
                  isUploaded: true,
                },
              };
            }
            return item;
          })
        );
        return {
          ...section,
          items: updatedItems,
        };
      })
    );
    return updatedSections;
  };

  const imagedArticle = {
    ...article,
    header: await updateHeader(),
    sections: await updateSections(),
  };
  return imagedArticle;
};

module.exports = manageImages;
