document.querySelectorAll('.delete-btn').forEach(button => {
  button.addEventListener('click', function() {
      const card = this.closest('.restaurant-card');
      const restaurantId = card.dataset.id;  // 使用 data-id

      fetch(`/api/restaurants/${restaurantId}`, {
          method: 'DELETE'
      }).then(response => {
          if (response.status === 204) {
              card.remove(); // 刪除卡片
          } else {
              console.error('delete fail');
          }
      }).catch(error => {
          console.error('error:', error);
      });
  });
});

  function deleteRestaurantCard(event) {
    // get the card
    const card = event.target.closest('.restaurant-card');
  
    // DOM delet
    card.remove();
  }
  