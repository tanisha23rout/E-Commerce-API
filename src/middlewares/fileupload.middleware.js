// 1. Import multer.
import multer from 'multer';
import path from 'path';

// 2. Configure storage with filename and location.

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

export const upload = multer({
  storage: storage,
});
