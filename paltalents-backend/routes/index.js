const express = require("express");
var router = express.Router();
const dboperations = require("../DBOperations/dboperations");
const talentsDbOperations = require("../DBOperations/talentsDbOperations");
const eventsDbOperations = require("../DBOperations/eventsDbOperations");
const homeDbOperations = require("../DBOperations/homeDbOperations");
const bodyParser = require('body-parser');

const cors = require("cors");

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/talents", async (req, res) => {
  try {
    let result = await talentsDbOperations.filterQuery();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/events", async (req, res) => {
  try {
    let result = await eventsDbOperations.filterQuery();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/filterEvents", async (req, res) => {
  try {
    let result = await eventsDbOperations.filterQuery(req.body.name, req.body.city, req.body.talent, req.body.date);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/filterTalents", async (req, res) => {
  try {
    let num;
    if (req.body.number == "Group") {
      num = 0;
    } else if (req.body.number == "Individual") {
      num = 1;
    }
    let rating;
    if (req.body.rating!=-1) {
      rating = req.body.rating;
    }
    let result = await talentsDbOperations.filterQuery(req.body.name, req.body.city, req.body.talent, num, rating);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/home", async(req, res) => {
  try {
    let posterImages = await homeDbOperations.getPosterImages();
    let trendingEvents = await homeDbOperations.getTrendingEvents();
    let trendingTalents = await homeDbOperations.getTrendingTalents();
    let response = [posterImages, trendingEvents, trendingTalents];
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/", (req, res) => {
  res.send("Backend server is running");
});

router.get("/api/v1/hello", (req, res) => {
  res.send('{"Message": "Backend is deployed and running!"}');
});

module.exports = router;
