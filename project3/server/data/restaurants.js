const restaurantData = [
  {
    "id": 0,
    name: "Mama",
    phone: "(161) 392 7294",
    address: "42 Blossom Street, Ancoats, Manchester, M4 6BF",
    photo: "/images/restaurant2.jpg"
  },
  {
    "id": 1,
    name: "Hawksmoor Manchester",
    phone: "(161) 836 6980",
    address: "184-186 Deansgate, Manchester, M3 3WB",
    photo: "/images/restaurant3.jpg"
  },
  {
    "id": 2,
    name: "The French by Simon Rogan",
    phone: "(161) 235 4780",
    address: "The Midland Hotel, Peter Street, Manchester, M60 2DS",
    photo: "/images/restaurant4.jpg"
  },
  {
    "id": 3,
    name: "Dishoom Manchester",
    phone: "(161) 537 3737",
    address: "32 Bridge Street, Manchester, M3 3BT",
    photo: "/images/restaurant5.jpg"
  },
  {
    "id": 4,
    name: "El Gato Negro",
    phone: "(161) 694 8585",
    address: "52 King Street, Manchester, M2 4LY",
    photo: "/images/restaurant6.jpeg"
  },
  {
    "id": 5,
    name: "Rudy Neapolitan Pizza",
    phone: "(161) 820 7920",
    address: "9 Cotton Street, Ancoats, Manchester, M4 5BF",
    photo: "/images/restaurant1.jpg"
  },
  
];

export function getRestaurants() {
  console.log(restaurantData);
  return restaurantData;
}

export function getRestaurant(id) {
  return restaurantData.find(restaurant => restaurant.id === parseInt(id));
}

export function createRestaurant(newRestaurant) {
  const newId = getNextId();
  const restaurant = { id: newId, ...newRestaurant };
  restaurantData.push(restaurant);
  return restaurant;
}

export function deleteRestaurant(id) {
  const filteredData = restaurantData.filter(restaurant => restaurant.id !== parseInt(id));
  restaurantData.length = 0; // 清空原來的數據
  restaurantData.push(...filteredData); // 添加過濾後的數據
}



export default restaurantData; 