import productRoutes from './routes/product.route.js'
import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose'
import connectDB from './config/db.js';
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/products', productRoutes);








app.get('/', (req, res) => {
    res.send('Hello World API Server');
});

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    });

  
