import express from 'express';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from '../server/data/restaurants.js';

const router = express.Router();

// 取得所有餐廳
router.get('/restaurants', (req, res) => {
  res.json(getRestaurants());
});

// 取得特定餐廳
router.get('/restaurants/:id', (req, res) => {
  const restaurant = getRestaurant(req.params.id);
  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).send('Restaurant not found');
  }
});

// 新增餐廳
router.post('/restaurants', (req, res) => {
  const newRestaurant = createRestaurant(req.body);
  res.status(201).json(newRestaurant);
});

// 刪除餐廳
router.delete('/restaurants/:id', (req, res) => {
  deleteRestaurant(req.params.id);
  res.status(204).send();
});

export default router;
