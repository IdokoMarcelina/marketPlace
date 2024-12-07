const storeModel = require("../model/storeModel");
const userModel = require("../model/userModel");
const cloudnery = require("../config/cloudinery");
const mongoose = require("mongoose");
const { trusted } = require("../config/db");

const createProduct = async (req, res) => {
  try {
    const { productName, productPrice, productBrand, productDescription } =
      req.body;
    const cloudImage = await cloudnery.uploader.upload(req.file.path);
    const getUser = await userModel.findById(req.params.id);

    const getStore = await new storeModel({
      productName,
      productPrice,
      productBrand,
      productDescription,
      productImage: cloudImage.secure_url,
      productImageID: cloudImage.public_id,
      productStatus: true,
    });

    getStore.productUser = getUser;
    getStore.save();

    getUser.store.push(new mongoose.Types.ObjectId(getStore._id));
    getUser.save();

    res.status(201).json({
      message: "Store Created Sucessfully",
      data: getStore,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to Create Product",
      data: error.message,
    });
    console.log(error);
  }
};

module.exports = { createProduct };
