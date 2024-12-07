const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    productPrice:{
        type:Number,
    },
    productBrand: {
        type: String,
      },
  
      productImage: {
        type: String,
      },
      productStatus: {
        type: Boolean,
      },
      productImageID: {
        type: String,
      },
      productDescription: {
        type: String,
      },
      productUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
      },
    },
      {timestamps: true}
);

const productModel = mongoose.model("stores", storeSchema);
module.exports = productModel;