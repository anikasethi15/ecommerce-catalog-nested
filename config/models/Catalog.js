import mongoose from "mongoose";

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  inStock: Boolean,
});

// Subcategory Schema
const subcategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  products: [productSchema], // Nested array of products
});

// Category Schema
const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  subcategories: [subcategorySchema], // Nested array of subcategories
});

// Main Catalog Schema
const Catalog = mongoose.model("Catalog", categorySchema);

export default Catalog;
