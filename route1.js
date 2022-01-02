const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/happy.html"));
});

router.get("/about", (req, res) => {
    res.send("1");
});

module.exports = router;
