import express from "express";
import {
  createCategory,
  getAllCategories,
  addSubcategory,
  addProduct,
} from "../controllers/catalogController.js";

const router = express.Router();

router.post("/category", createCategory);
router.get("/categories", getAllCategories);
router.post("/:categoryId/subcategory", addSubcategory);
router.post("/:categoryId/:subcategoryId/product", addProduct);

export default router;
