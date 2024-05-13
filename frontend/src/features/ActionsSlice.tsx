import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: number;
  price: number;
  // Add other properties as needed
}

interface ActionsState {
  cart: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: ActionsState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const ActionsSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {

    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = null;
      state.totalPrice = null;
    },

    addToCart: (state, action: PayloadAction<CartItem | CartItem[]>) => {
      const itemsToAdd = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      itemsToAdd.forEach((item) => {
        const { id } = item;
        const existingItemIndex = state.cart.findIndex(
          (existingItem) => existingItem.id === id
        );

        if (existingItemIndex !== -1) {
          state.cart[existingItemIndex].quantity += 1;
        } else {
          state.cart.push({
            ...item,
            quantity: 1,
          });
        }
      });
    },

    getCartTotal: (state) => {
      const { totalPrice, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );

      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const removedItem = state.cart.find((item) => item.id === itemId);

      if (removedItem) {
        state.totalQuantity -= removedItem.quantity;
        state.totalPrice -= removedItem.price * removedItem.quantity;

        state.cart = state.cart.filter((item) => item.id !== itemId);
      }
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const itemToIncrease = state.cart.find((item) => item.id === itemId);

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += itemToIncrease.price;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const itemToDecrease = state.cart.find((item) => item.id === itemId);

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= itemToDecrease.price;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  getCartTotal,
  clearCart
} = ActionsSlice.actions;

export default ActionsSlice.reducer;
