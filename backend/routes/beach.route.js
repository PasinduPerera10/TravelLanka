const express = require('express');
const router = express.Router();
const multer = require('multer'); // For handling image uploads
const path = require('path');
const Beach = require('../models/beach.model');

// Multer configuration for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../webfrontend/public/beachimages');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Route to add a new beach
router.post('/beach/new', upload.single('image'), (req, res) => {
  const { title, description, province, district, category } = req.body;
  const image = req.file ? req.file.path : ''; // Use req.file to get the uploaded image path

  const newBeach = new Beach({
    title,
    description,
    province,
    district,
    category,
    images: image, // Store the image path as a string
  });

  newBeach
    .save()
    .then((beach) => res.json(beach))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Route to get all beaches
router.get('/beach/view', (req, res) => {
  Beach.find()
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Route to get a beach by ID
router.get('/beach/view/:id', (req, res) => {
  Beach.findById(req.params.id)
    .then((beach) => res.json(beach))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Route to update a beach
router.put('/beach/update/:id', upload.single('image'), (req, res) => {
  Beach.findById(req.params.id)
    .then((beach) => {
      beach.title = req.body.title;
      beach.description = req.body.description;
      beach.province = req.body.province;
      beach.district = req.body.district;
      beach.category = req.body.category;

      if (req.file) {
        // Update the image only if a new image is uploaded
        beach.images = [req.file.path];
      }

      beach
        .save()
        .then(() => res.json('Beach updated successfully'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.delete('/beach/delete/:id', (req, res) => {
  Beach.findByIdAndRemove(req.params.id)
    .then(() => res.json('Beach deleted successfully'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;