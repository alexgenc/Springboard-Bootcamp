
// Helper function for calculating cart total
export function calculateCartTotal(products, cart) {
  let total = 0;
  
  for (let id in products) {
    const { price } = products[id];
    const quantity = cart[id] || 0;
    total += price * quantity;
  }
  
  return total;
}

// Helper function for calculating how many items are in cart
export function calculateTotalQuantity(cart) {
  let totalQuantity = 0;
  for (let id in cart) {
    totalQuantity += cart[id];
  }
  return totalQuantity;
}