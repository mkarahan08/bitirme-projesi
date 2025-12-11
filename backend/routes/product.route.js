import express from 'express'
import Product from '../models/products.js'
const router = express.Router();
import {getAllProducts, getProductById,createProduct,updateProduct , deleteProduct} from '../controllers/productController.js'

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/',createProduct);
router.put('/:id', updateProduct);
router.delete('/:id',deleteProduct);

export default router;
