import { updateBookList } from "./book-list";
import { updateShoppingCart } from "./shopping-cart";
const initialState = {
  bookList: {
    books: [],
    error: null,
    loading: true
  },
  shoppingCart: {
    cartItems: [],
    orderTotal: 0
  }
};

const reducer = (state, action) => {
  return {
    shoppingCart: updateShoppingCart(state, action),
    bookList: updateBookList(state, action)
  };
};

export default reducer;
