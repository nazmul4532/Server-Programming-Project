const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

// Define a filter for image files
const imageFileFilter = (req, file, cb) => {
  const allowedImageTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedImageTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Define a filter for video files
const videoFileFilter = (req, file, cb) => {
  const allowedVideoTypes = ["video/mp4", "video/quicktime"];
  if (allowedVideoTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Storage configuration for profile images (single upload)
const profileImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profileImage");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

// Middleware for uploading a single profile image
const uploadProfileImage = multer({ storage: profileImageStorage, fileFilter: imageFileFilter });



// Storage configuration for product images (multiple upload)
const productImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/productImage"); // Corrected folder name
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

// Middleware for uploading multiple product images
const uploadProductImages = multer({ storage: productImageStorage, fileFilter: imageFileFilter }); // Corrected middleware name



// Storage configuration for videos (multiple upload)
const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/videos");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

// Middleware for uploading multiple videos
const uploadVideos = multer({ storage: videoStorage, fileFilter: videoFileFilter }); // Set 5 as the maximum number of files allowed

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify destination based on file type (images or videos)
    if (file.fieldname === 'images') {
      cb(null, 'uploads/productImage');
    } else if (file.fieldname === 'videos') {
      cb(null, 'uploads/videos');
    } else {
      cb(new Error('Invalid field name'), null);
    }
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  },
});

const uploadVideoImage = multer({ storage: storage });


module.exports = { uploadProfileImage, uploadProductImages, uploadVideos, uploadVideoImage };
