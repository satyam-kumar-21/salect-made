const multer = require("multer");
const path = require("path");

const allowedImageExtensions = [".jpg", ".jpeg", ".webp", ".png", ".jfif"];
const allowedVideoExtensions = [".mp4", ".webm", ".ogg"];

const upload = multer({
  dest: "uploads/", // Destination folder for files if using dest
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max size (example value)
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();

    if (allowedImageExtensions.includes(ext) || allowedVideoExtensions.includes(ext)) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error(`Unsupported file type: ${ext}`)); // Reject the file
    }
  },
  storage: multer.diskStorage({
    destination: "uploads/", // Storage destination if using storage
    filename: (_req, file, cb) => {
      cb(null, file.originalname); // Keep original filename
    },
  }),
});

module.exports = upload;
