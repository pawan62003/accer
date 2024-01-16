const express = require("express");
const { FlatModel } = require("../model/flat.model");

const flatRoute = express.Router();

flatRoute.get("/", async (req, res) => {
  const { location, bhk } = req.query;
  const query = {};
  
  if (bhk) {
    query["bhk"] = bhk;
  }
  if (location) {
    const regexPattern = location
    .split(" ")
    .map((term) => `(?=.*${term})`)
    .join("");
    query["location"] = { $regex: regexPattern, $options: "i" }
  }
  try {
    const flat = await FlatModel.find(query);
    res.send(flat);
  } catch (error) {
    res.send(error);
  }
});

flatRoute.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newFlat = new FlatModel(req.body);
    await newFlat.save();
    res.send({ msg: "new flat added successfully" });
  } catch (error) {
    res.send({ err: "failed to add new flat" });
  }
});

module.exports = {
  flatRoute,
};
