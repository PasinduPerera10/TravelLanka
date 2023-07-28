const express = require("express");
const router = express.Router();
const Beach = require("../models/beach.model");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../webfrontend/src/components/beachimages')
  },
  filename: function (req, file, cb) {
    const fileName = uuidv4() + path.extname(file.originalname);
    cb(null, fileName);
  }
});

const uplobeach = multer({ storage: storage });

router.post("/beach/new", uplobeach.fields([{ name: 'image1' }, { name: 'image2' }]), async (req, res) => {
  const { title, description, province, district } = req.body;

  if (!title || !description) {
    res.status(422).json("Please enter all data");
    return 0;
  } else {
    try {
      const beachdbeach = new Beach({
        title: req.body.title,
        description: req.body.description,
        province: req.body.province,
        district: req.body.district,
        image1: req.files['image1'][0].filename,
        image2: req.files['image2'][0].filename,
      });

      await beachdbeach.save();
      res.status(201).json(beachdbeach);
    } catch (error) {
      console.log("Error", error);
      res.status(422).json(error);
    }
  }
});

// get beach data

router.get("/beach/view", async (req, res) => {
  try {
    const getbeachdata = await Beach
      .find();

    res.status(201).json({ getbeachdata });
    console.log(getbeachdata)
  } catch (error) {
    return res.status(422).json(error);
  }
});

// get individual beach data

router.get("/beach/view/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const beachindividual = await Beach
      .findById({ _id: id });
    res.status(201).json(beachindividual);
    console.log(beachindividual)
  } catch (error) {
    res.status(422).json(error);
  }
});

// update existing beach data

router.put("/beach/update/:id", async (req, res) => {
  const { title, description } = req.body;
  if (
    !title ||
    !description
  ) {
    res.status(422).json("Please enter all data");
    return 0;
  }
  try {
    const { id } = req.params;

    const updatebeach = await Beach.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatebeach);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete existing beach
router.delete("/beach/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletebeach = await Beach.findByIdAndDelete({ _id: id });
    res.status(201).json(deletebeach);
  } catch (error) {
    res.status(422).json(error);
  }
});                       

module.exports = router;
