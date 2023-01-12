const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const fileUpload = require("./fileUpload.js");
const Image = require("./imageSchema.js");

const app = express();

app.use(express.json());
app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use(
  cors({
    origin: "*",
  })
);
app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

app.post("/postImage", fileUpload.single("image"), (req, res) => {
  if (req.file === undefined) {
    return res
      .status(500)
      .json({ message: "File uploading failed due to some unknown issues." });
  }

  const newImage = new Image({
    imgName: req.file.originalname,
    imgURL: req.file.path,
  });

  try {
    newImage.save();
  } catch (err) {
    return res.json({ message: err.message });
  }

  res
    .status(200)
    .json({ imageName: newImage.imgName, imageURL: newImage.imgURL });
});

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
