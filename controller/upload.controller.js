const express = require('express');
const uploadRouter = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const generateCode  = require('../utils/generateSixDigit');

const app = express();
const upload = multer({ dest: 'uploads/' });

uploadRouter.post('/upload', upload.single('file'), (req, res) => {
  const code = generateCode();
  const ext = path.extname(req.file.originalname);
  const filename = `${code}${ext}`;
  const filepath = path.join(__dirname, 'uploads', filename);
  fs.renameSync(req.file.path, filepath);
  res.json({ code });
});

module.exports = uploadRouter ;
