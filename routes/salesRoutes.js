const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const salesController = require("../controllers/salesController");

router.post("/upload", upload.single("file"), salesController.uploadCSV);

module.exports = router;
