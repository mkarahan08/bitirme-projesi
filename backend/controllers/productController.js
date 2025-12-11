import Product from '../models/products.js';

export const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateProduct = async (req,res) => {
    try {
        const {id} = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteProduct = async (req,res) => {
    try {
        const {id} = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
