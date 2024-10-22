// import express from "express";
// import dotenv from "dotenv";
// import path from "path";
//
// import { connectDB } from "../config/db.js";
//
// import productRoutes from "../routes/product.route.js";
//
// dotenv.config();
//
// const app = express();
// const PORT = process.env.PORT || 5000;
//
// const __dirname = path.resolve();
//
// app.use(express.json()); // allows us to accept JSON data in the req.body
//
// app.use("/api/products", productRoutes);
//
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "/frontend/dist")));
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//     });
// }
//
// app.listen(PORT, () => {
//     connectDB();
//     console.log("Server started at http://localhost:" + PORT);
// });





import express from "express"; // Import Express
import dotenv from 'dotenv'; // Import dotenv for managing environment variables
import mongoose from'mongoose'; // Import Mongoose
import Product from '../models/product.model.js';
import Restaurant from "../models/restaurant.model.js"; // Import the Product model


// Import routes

// Define your routes here
const app = express();
// Load environment variables from.env file
dotenv.config();


// Connect to MongoDB
app.use(express.json()); // Bodyparser middleware


// Define middleware
// Connect to MongoDB (ensure you have your MongoDB connection string in the .env file)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB')) // Log a message indicating the server has started
    .catch(err => console.error('Error connecting to MongoDB:', err)); // Log a message indicating the server has started


// GET Route to fetch all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({}); // Find all products
        res.json(products); // Return the products
    } catch (error) {
        console.error(`Error in fetching products: ${error.message}`); // Log the error
        res.status(500).json({ success: false, message: 'Failed to fetch products.' }); // Return an error if the server couldn't start
    }
});
// POST Route to ADD NEW products
// Create a new product instance with the provided details

app.post('/api/products', async (req, res) => { // POST request to create a new product
    const product = req.body; // Assuming the request body contains product details

    if (!product.name || !product.price || !product.image || !product.description) { // Return an error if any of the required fields are missing
        return res.status(400).json({ message: 'Missing product details.' });
    }

// Create a new product instance with the provided details
    const newProduct = new Product(product); // Create a new product instance with the provided details

    try { // Try to save the new product to the database
        await newProduct.save(); // Save the new product to the database
        return res.status(201).json({ success: true, data: newProduct }); // Return the saved product
    } catch (error) {
        console.error("Error in creation: ", error.message); // Return an error if the server couldn't start
        return res.status(500).json({ success: false, message: 'Failed to create product.' }); // Return an error if the server couldn't start
    }
});


// DELETE Route to delete a product
app.delete('/api/products/:id', async (req, res) => { // DELETE request to delete a product
    const { id } = req.params; // Get the product ID from the request parameters

    try {
        const product = await Product.findByIdAndDelete(id); // Find and delete the product by ID

        if (!product) { // Return an error if the product was not found
            return res.status(404).json({ success: false, message: 'Product not found.' }); // Return an error if the product was not found
        }

        return res.status(200).json({ success: true, data: product }); // Return the deleted product
    } catch (error) {
        console.error(`Error in deletion: ${error.message}`); // Return an error if the server couldn't start
        return res.status(500).json({ success: false, message: 'Failed to delete product.' }); // Return an error if the server couldn't start
    }
});

// PUT Route to update a product
app.put('/api/products/:id', async (req, res) => { // PUT request to update a product
    const { id } = req.params; // Get the product ID from the request parameters
    const updatedProduct = req.body; // Get the updated product details from the request body

    try { // Try to update the product to the database
        const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true }); // Update the product using the provided details and return the updated product

        if (!mongoose.Types.ObjectId.isValid(id) || !product) {
            return res.status(404).json({ success: false, message: 'Invalid ID or Product not found.' }); // Return an error if the ID is invalid or the product was not found
        }

        return res.status(200).json({ success: true, data: product }); // Return the updated product
    } catch (error) { // Return an error if the server couldn't start
        console.error(`Error in updating product: ${error.message}`); // Return an error if the server couldn't start
        return res.status(500).json({ success: false, message: 'Failed to update product.' }); // Return an error if the server couldn't start
    }
});

// GET Route to fetch all restaurants
app.get('/api/restaurant', async (req, res) => {
    try {
        const products = await Restaurant.find({}); // Find all products
        res.json(products); // Return the restaurant
    } catch (error) {
        console.error(`Error in fetching products: ${error.message}`); // Log the error
        res.status(500).json({ success: false, message: 'Failed to fetch restaurant.' }); // Return an error if the server couldn't start
    }
});
// POST Route to ADD NEW restaurants
// Create a new restaurant instance with the provided details

app.post('/api/restaurants', async (req, res) => { // POST request to create a new restaurant
    const restaurant = req.body; // Assuming the request body contains restaurant details

    if (!restaurant.name || !restaurant.image ) { // Return an error if any of the required fields are missing
        return res.status(400).json({ message: 'Missing restaurant details, You must have atleast a name and image.' });
    }
// Create restaurant endpoint
    app.post('/api/restaurants', async (req, res) => {
        const { name, address, cuisine, image } = req.body;
        try {
            const newRestaurant = new Restaurant({ name, address, cuisine, image });
            await newRestaurant.save();
            res.status(201).json({ success: true, data: newRestaurant });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error creating restaurant' });
        }
    });

// Create a new product instance with the provided details
    const newRestaurant = new Restaurant(restaurant); // Create a new restaurant instance with the provided details

    try { // Try to save the new product to the database
        await newRestaurant.save(); // Save the new product to the database
        return res.status(201).json({ success: true, data: newRestaurant }); // Return the saved restaurant
    } catch (error) {
        console.error("Error in creation: ", error.message); // Return an error if the server couldn't start
        return res.status(500).json({ success: false, message: 'Failed to create restaurant.' }); // Return an error if the server couldn't start
    }
});


// DELETE Route to delete a product
app.delete('/api/restaurant/:id', async (req, res) => { // DELETE request to delete a product
    const { id } = req.params; // Get the product ID from the request parameters

    try {
        const restaurant = await Restaurant.findByIdAndDelete(id); // Find and delete the restaurant by ID

        if (!restaurant) { // Return an error if the product was not found
            return res.status(404).json({ success: false, message: 'Restaurant not found.' }); // Return an error if the restaurant was not found
        }

        return res.status(200).json({ success: true, data: restaurant }); // Return the deleted restaurant
    } catch (error) {
        console.error(`Error in deletion: ${error.message}`); // Return an error if the server couldn't start
        return res.status(500).json({ success: false, message: 'Failed to delete restaurant.' }); // Return an error if the server couldn't start
    }
});

// PUT Route to update a product
app.put('/api/restaurant/:id', async (req, res) => { // PUT request to update a restaurant
    const { id } = req.params; // Get the product ID from the request parameters
    const updatedRestaurant = req.body; // Get the updated product details from the request body

    try { // Try to update the product to the database
        const restaurant = await Restaurant.findByIdAndUpdate(id, updatedRestaurant, { new: true }); // Update the restaurant using the provided details and return the updated restaurant

        if (!mongoose.Types.ObjectId.isValid(id) || !restaurant) {
            return res.status(404).json({ success: false, message: 'Invalid ID or Restaurant not found.' }); // Return an error if the ID is invalid or the restaurant was not found
        }

        return res.status(200).json({ success: true, data: restaurant }); // Return the updated restaurant
    } catch (error) { // Return an error if the server couldn't start
        console.error(`Error in updating restaurant: ${error.message}`); // Return an error if the server couldn't start
        return res.status(500).json({ success: false, message: 'Failed to update restaurant.' }); // Return an error if the server couldn't start
    }
});

// Start the server
app.listen(3000, () => { // Log a message indicating the server has started
    console.log('Server is started at http://localhost:3000'); // Log a message indicating the server has started
});


