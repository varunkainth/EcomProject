const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncErros");
const ApiFeatures = require("../utils/apiFeatures");


//create Products

exports.createProduct = catchAsyncError(async (req, res, next) => {
    const prodcut = await Product.create(req.body);
    res.status(201).json({
        sucess: true,
        message: "Product Create SucessFully"
    })
});

// Get All Product
exports.getAllprodcuts = catchAsyncError(async (req, res) => {

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const prodcut = await apiFeature.query;

    res.status(200).json({
        sucess: true,
        prodcut
    })
});
// update product --admin
exports.updateProducts = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Products Not Found", 500))

    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });

    res.status(200).json({ sucess: true, message: "Product update Scuessfully", product })
});
// delete Product

exports.deleteProdcut = catchAsyncError(async (req, res, next) => {

    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Products Not Found", 500))

    }
    await product.remove();
    res.status(200).json({
        sucess: true,
        message: "Product Delete SucessFully"
    })
});

//Get Product Deatils

exports.getProductDeatils = async (req, res, next) => {
    // const productCount = await Product.countDocuments();

    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Products Not Found", 404))

    }
    res.status(200).json({
        sucess: true,
        product,
        productCount
    })
}