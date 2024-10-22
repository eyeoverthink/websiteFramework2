import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cuisine: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        rating: {
            type: Number,
            required: false,
        },
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
