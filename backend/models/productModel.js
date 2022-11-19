const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please Enter Product Name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please Enter Products Description "]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxlength: [8, "Price Cannot Exceed 8 Characters"]
    },
    rating: {
        tyep: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
    ],
    category: {
        type: String,
        required: [true, "Please Enter Product Category "],

    },
    stock: {
        type: Number,
        required: [true, "please Enter prodcut Stock"],
        maxlength: [500, "Stock Cannot Exceed 500 characters"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: { type: String, required: true }, rating: { type: Number, required: true }, comment: { type: String, required: true }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Product",productSchema);