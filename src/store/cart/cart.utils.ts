import { Item } from '.';

export const addItemToCart = (cartItems: Item[], cartItemToAdd: Item) => {
  const existingCartItem = cartItems.find(
    (cartItem: Item) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem && existingCartItem.quantity) {
    const newQuantity = existingCartItem.quantity + 1;

    return cartItems.map(
      (cartItem: Item) => {
        return (cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
        )
      }
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}