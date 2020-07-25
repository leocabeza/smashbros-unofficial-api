require('dotenv').config();

const cloudinary = require('cloudinary');

// https://www.smashbros.com/en_US/fighter/index.html
// https://www.ssbwiki.com/Fighter
// https://www.ssbwiki.com/Category:Head_icons_(SSBU)

const newCharacterToUpload = {
  'Ultimate Characters/Portraits': 'https://www.ssbwiki.com/images/thumb/3/35/Min_Min_SSBU.png/1200px-Min_Min_SSBU.png',
  'Ultimate Characters/Icons': 'https://www.ssbwiki.com/images/f/fc/MinMinHeadSSBUWebsite.png',
  'Series': 'https://www.ssbwiki.com/images/8/85/ARMSSymbol.svg'
};

(async() => {
  try {
    let promises = [];
    Object.keys(newCharacterToUpload).forEach((folder) => {
      const imageRoute = `${newCharacterToUpload[folder]}`;
      
      promises.push(cloudinary.v2.uploader.upload(imageRoute, {
        folder,
        overwrite: false
      }));
    });

    const promisesList = await Promise.all(promises);
    console.log('-------------------------------------------------------');
    promisesList.forEach(({ secure_url }) => {
      console.log('secure_url: ', secure_url);
    });
  } catch (error) {
    console.log('error: ', error);
  }
})();
