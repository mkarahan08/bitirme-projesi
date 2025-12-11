import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    original_price: {
        type: Number,
        required: true
    },
    final_price: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    },   
    {timestamps: true}
);    

const Product = mongoose.model('Product', productSchema);

export default Product;
