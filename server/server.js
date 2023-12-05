require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const mongodbUrl =
  process.env.MONGODB_URL || "mongodb://localhost:27017/ecommerce-db";
const mongodbDBName = process.env.MONGODB_DB || "";
const mongodbCollectionName = process.env.MONGODB_COLLECTION || "";

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model(
  mongodbDBName,
  productSchema,
  mongodbCollectionName
);

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = new Product({ _id, name, description, price });
    await product.save();
    res.json({ message: "Product created successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
