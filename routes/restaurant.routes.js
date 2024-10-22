import express from 'express';
import restaurantRoutes from '../routes/restaurant.routes.js';

const app = express();

app.use(express.json());
app.use('/api/restaurants', restaurantRoutes);

// ... rest of your server setupimport express from 'express';
import { createRestaurant } from '../controllers/restaurant.controller.js';

const router = express.Router();

router.post('/', createRestaurant);

export default router;