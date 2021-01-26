const multer = require('multer');
const upload = multer();
const fs = require('fs');
const { promisify } = require('util');

const pipeline = promisify(require('stream').pipeline);

const uploadImage = async (req, res, next) => {
  const { file, body: { name } } = req;
  if (file.detectedFileExtension !== ".jpg") next(new Error("Invalid File Type!"));

  const fileName = name + file.detectedFileExtension;
  await pipeline(file.stream, fs.createWriteStream(`${__dirname}/../public/uploads/${fileName}`));

  res.send("File Uploaded!")
}

module.exports = uploadImage;