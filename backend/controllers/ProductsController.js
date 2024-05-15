import { ProductsModel } from "../models/Products.Model.js";
import { setMongoose } from "../utils/Mongoose.js";


export const getLatestPRoducts = async (req, res, next) => {
  try {
    const products = await ProductsModel.find({ latest: true });
    setMongoose();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = 5;
    let search = req.query.search || "";
    let category = req.query.category || "All";

    let query = {
      name: { $regex: search, $options: "i" }
    };

    if (category !== "All") {
      query.category = category;
    }
   
    const productData = await ProductsModel.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await ProductsModel.countDocuments(query);

    const response = {
      totalPages:Math.ceil(total / limit),
      page,
      productData,
    };
setMongoose();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const {id} = req.body;
    const product = await ProductsModel.findById(id);
    setMongoose();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};