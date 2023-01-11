const multer = require("multer");
const crypto = require("crypto");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const fileUpload = multer({
  limits: { fileSize: 2000000 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, crypto.randomUUID() + "." + ext);
    },
  }),

  fileFilter: (req, file, cb) => {
    console.log(req.body, "in fileFilter");
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type");
    cb(error, isValid);
  },
});

module.exports = fileUpload;
