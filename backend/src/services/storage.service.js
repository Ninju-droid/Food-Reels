const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, 
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});


async function uploadFile(file, fileName) {
    try {
        const response = await imagekit.files.upload({
            file: file.toString('base64'),
            fileName: fileName,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    uploadFile
}
