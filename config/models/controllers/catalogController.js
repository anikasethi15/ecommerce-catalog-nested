import Catalog from "../models/Catalog.js";

// CREATE a new category
export const createCategory = async (req, res) => {
  try {
    const category = new Catalog(req.body);
    await category.save();
    res.status(201).json({ message: "Category created", data: category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Catalog.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD subcategory to a category
export const addSubcategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, description } = req.body;

    const category = await Catalog.findById(categoryId);
    if (!category) return res.status(404).json({ message: "Category not found" });

    category.subcategories.push({ name, description, products: [] });
    await category.save();
    res.status(201).json({ message: "Subcategory added", data: category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD product to a specific subcategory
export const addProduct = async (req, res) => {
  try {
    const { categoryId, subcategoryId } = req.params;
    const { name, price, brand, inStock } = req.body;

    const category = await Catalog.findById(categoryId);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const subcategory = category.subcategories.id(subcategoryId);
    if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });

    subcategory.products.push({ name, price, brand, inStock });
    await category.save();

    res.status(201).json({ message: "Product added", data: category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
