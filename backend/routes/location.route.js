const express = require('express');
const router = express.Router();
const multer = require('multer'); // For handling image uploads
const path = require('path');
const Location = require('../models/location.model');

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
router.post('/beach/new', upload.fields([{ name: 'image1' }]), (req, res) => {
  const { title, description, province, district, category } = req.body;
  const image = req.file ? req.file.path : ''; // Use req.file to get the uploaded image path

  const newBeach = new Location({
    title,
    description,
    province,
    district,
    category,
    image1: req.files['image1'][0].filename,
    // image2: req.files['image2'][0].filename,
    // image3: req.files['image3'][0].filename,
    // image4: req.files['image4'][0].filename,
    // image5: req.files['image5'][0].filename,
  });

  newBeach
    .save()
    .then((beach) => res.json(beach))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Route to get all beaches
router.get('/beach/view', (req, res) => {
  Location.find()
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/beach/view1', (req, res) => {
  Location.find({category : "Beaches"})
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/beach/view2', (req, res) => {
  Location.find({category : "Cultural and Historical"})
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/beach/view3', (req, res) => {
  Location.find({category : "Wildlife and Nature"})
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/beach/view4', (req, res) => {
  Location.find({category : "Adventure and Trekking"})
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/beach/view5', (req, res) => {
  Location.find({category : "Ayurveda and Wellness"})
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/beach/view6', (req, res) => {
  Location.find({category : "Hill Country"})
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/beach/view7', (req, res) => {
  Location.find({category : "Cuisine"})
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/beach/view8', (req, res) => {
  Location.find({category : "Festivals and Events"})
    .then((beaches) => res.json(beaches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Route to get a beach by ID
router.get('/beach/view/:id', (req, res) => {
  Location.findById(req.params.id)
    .then((beach) => res.json(beach))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Route to update a beach
router.put('/beach/update/:id', upload.single('image'), (req, res) => {
  Location.findById(req.params.id)
    .then((beach) => {
      beach.title = req.body.title;
      beach.description = req.body.description;
      beach.province = req.body.province;
      beach.district = req.body.district;
      beach.category = req.body.category;

      if (req.file) {
        // Update the image only if a new image is uploaded
        beach.image1 = req.file.filename;
      }

      beach
        .save()
        .then(() => res.json('Location updated successfully'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.delete('/beach/delete/:id', (req, res) => {
  Location.findByIdAndRemove(req.params.id)
    .then(() => res.json('Location deleted successfully'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;