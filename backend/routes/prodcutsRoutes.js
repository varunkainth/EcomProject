const express = require('express');
const { getAllprodcuts,createProduct, updateProducts, deleteProdcut, getProductDeatils } = require('../controller/productController');

const router = express.Router();

router.route('/products').get(getAllprodcuts)


router.route('/products/new').post(createProduct)

router.route('/products/:id').put(updateProducts).delete(deleteProdcut).get(getProductDeatils)

module.exports= router