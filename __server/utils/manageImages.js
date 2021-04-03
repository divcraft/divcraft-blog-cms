// const { cloudinary } = require('../config/cloudinaryConfig');

const manageImages = async (article) => {
  const manageImage = (stringData) => {
    return stringData;
  };
  const updatedSections = article.sections.map((section) => {
    const updatedItems = section.items.map((item) => {
      let updatedItem;
      if (item.type === 'IMAGE') {
        updatedItem = {
          ...item,
          content: {
            ...item.content,
            data: manageImage(item.content.data),
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
    header: {
      ...article.header,
      image: {
        ...article.header.image,
        data: manageImage(article.header.image.data),
      },
    },
    sections: updatedSections,
  };
  // try {
  //    const uploadResponse = await cloudinary.uploader.upload(img, {
  //       upload_preset: 'div-craft-setup',
  //    });
  //    console.log(uploadResponse);
  // } catch (err) {
  //    console.log(err);
  // };
  return imagedArticle;
};

module.exports = manageImages;
