const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { Sales } = require("../models");

// Upload CSV & Store in Database
const uploadCSV = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = path.join(__dirname, "..", "uploads", req.file.filename);
    const results = [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
            results.push({
                date: row.date,
                product: row.product,
                quantity: parseInt(row.quantity),
                price: parseFloat(row.price),
            });
        })
        .on("end", async () => {
            try {
                await Sales.bulkCreate(results);
                res.json({ message: "CSV data uploaded successfully" });
            } catch (error) {
                res.status(500).json({ error: "Error saving data" });
            }
        });
};

module.exports = { uploadCSV };
