import express from "express";
import {
  verifyCouponAtCheckout,
} from "../controllers/CouponController.js";
import { verifyUser } from "../middleware/Auth.js";

const couponRouter = express.Router();

couponRouter.post("/coupons/verifyCouponAtCheckout", verifyUser, verifyCouponAtCheckout);


export default couponRouter;
