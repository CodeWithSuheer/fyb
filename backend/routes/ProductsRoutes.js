import express from "express";
import {
  getLatestPRoducts,
  getProducts,
} from "../controllers/ProductsController.js";

const productRouter = express.Router();

productRouter.post("/products/getLatestPRoducts", getLatestPRoducts);
productRouter.post("/products/getProducts", getProducts);

export default productRouter;
