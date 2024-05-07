import { CouponModel } from "../models/CouponModel.js";
import { setMongoose } from "../utils/Mongoose.js";


export const verifyCouponAtCheckout = async (req,res,next) => {
  try {
    const {id,code,category,userId} = req.body;
    if(!id || !code || userId) throw new Error("All Fields Required");
    const coupon = await CouponModel.findById(id);
    if (!coupon) throw new Error("Coupon Not Found");
    const checkCategory = coupon.categories.includes(category);
    if(!coupon.allProducts && !checkCategory)  throw new Error("Invalid coupon for this category");
    if(coupon.uses_count === coupon.total_limit) throw new Error("Coupun Limit reached");
    const currentDate = Date.now();
    if(coupon.expiresAt >= currentDate || !coupon.isActive) throw new Error("Coupun Expired");
    const checkUserID = coupon.users.includes(userId);
    if(checkUserID) throw new Error("You have already used this code");
    const updatedUseCount = coupon.uses_count + 1;
    coupon.uses_count = updatedUseCount;
    coupon.users.push(userId);
    await coupon.save();
    return res.status(200).json({message:"Coupon verified Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });

  }
};