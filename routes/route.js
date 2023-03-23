const express = require("express");
const router = express.Router();
const path = require("path");
const pool = require("../server/db");

router.get("/navbar", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/navbar.html"));
});

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});

router.get("/table", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/table.html"));
});

router.get("/data", (req, res) => {
  const query = "SELECT * FROM foot_data";
  console.log(query);
  pool.query(query, (error, results) => {
    if (error) throw error;
    res.send({ data: results }); 
  });
});

module.exports = router;
