import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 100000, //mb
  },
  fileFilter: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    if (ext !== ".png" && ".jpg" && ".JPEG") {
      return cb(new Error("Only images are allowed"));
    }
    cb(null, true);
  },
});

export { uploadPicture };
