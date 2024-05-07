import { ProductsModel } from "../models/Products.Model.js";
import { deleteImageFromFirebase, uploadImageToFirebase } from "../utils/Firebase.js";
import { setMongoose } from "../utils/Mongoose.js";


export const getLatestPRoducts = async (req, res, next) => {
  try {
    const products = await ProductsModel.aggregate([
      { $match: { latest: true } },
      { $sample: { size: 12 } },
    ]);
    setMongoose();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req, res, next) => {
  try {
    var page = 1;
    if (req.query.page) {
      page = req.query.page;
    }
    const limit = 5;
    const products = await ProductsModel.find({ latest: false })
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    const count = await ProductsModel.find({ latest: false }).countDocuments();
    setMongoose();
    return res
      .status(200)
      .json({
        products,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
