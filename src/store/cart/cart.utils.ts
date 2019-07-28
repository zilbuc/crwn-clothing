import { Item } from '.';

export const addItemToCart = (cartItems: Item[], cartItemToAdd: Item): Item[] => {
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

export const removeItemFromCart = (cartItems: Item[], cartItemToRemove: Item): Item[] => {
  const existingCartItem = cartItems.find(
    (cartItem: Item) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem: Item) => cartItem.id !== existingCartItem.id)
  }

  return cartItems.map(
    (cartItem: Item) => {
      return ((cartItem.id === cartItemToRemove.id && cartItem.quantity)
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
      )
    }
  )
}