import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from './data/restaurants.js';
import restaurantData from './data/restaurants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
  res.render('attractions');
});

app.get('/restaurants', (req, res) => {
  const restaurants = getRestaurants();
  console.log(restaurants); // 確認是否有回傳正確資料
  res.render('restaurants', { restaurants: restaurants });
});

app.get('/restaurants/:id', (req, res) => {
  const restaurant = getRestaurant(req.params.id);
  if (restaurant) {
    res.render('restaurant-details', { restaurant });
  } else {
    res.status(404).send("Restaurant not found");
  }
});

app.use(express.urlencoded({ extended: true }));

app.get('/newRestaurant', (req, res) => {
  res.render('newRestaurant'); // 渲染 newRestaurant.ejs 檔案
});


app.post('/newRestaurant', (req, res) => {
  const { name, phone, address, photo } = req.body;
  if (!name || !phone || !address || !photo) {
      return res.status(400).send('All fields are required.');
  }
  // 將新餐廳加入資料陣列
  restaurantData.push({ name, phone, address, photo });
  res.redirect('/restaurants');
});


import apiRoutes from '../routes/api.js';
app.use(express.json()); // 處理 JSON 資料
app.use('/api', apiRoutes); // 設定 '/api' 路徑使用 API 路由

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
