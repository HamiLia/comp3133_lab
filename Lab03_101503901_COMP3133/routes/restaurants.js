const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

// 모든 레스토랑 + 정렬
router.get("/", async (req, res) => {
  const order = req.query.sortBy === "DESC" ? -1 : 1;
  const data = await Restaurant.find({}).sort({ restaurant_id: order });
  res.json(data);
});

// cuisine별
router.get("/cuisine/:type", async (req, res) => {
  const data = await Restaurant.find({ cuisine: req.params.type });
  res.json(data);
});

// Delicatessen + city != Brooklyn
router.get("/Delicatessen", async (req, res) => {
  const data = await Restaurant.find(
    { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
    { _id: 0, cuisine: 1, name: 1, city: 1 },
  ).sort({ name: 1 });

  res.json(data);
});

module.exports = router;
