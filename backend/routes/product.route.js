import express from "express";
import { deleteProduct, getAllProducts, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts)
router.post("/", getProducts)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router;