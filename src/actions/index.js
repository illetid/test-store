const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST"
  };
};

const booksLoaded = newBooks => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  };
};

const booksError = err => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: err
  };
};
const bookAddedToCart = bookID => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookID
  };
};
const bookRemovedFromCart = bookID => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: bookID
  };
};
const allBookRemovedFromCart = bookID => {
  return {
    type: "ALL_BOOK_REMOVED_FROM_CART",
    payload: bookID
  };
};
const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};

export {
  booksRequested,
  booksError,
  bookRemovedFromCart,
  allBookRemovedFromCart,
  booksLoaded,
  fetchBooks,
  bookAddedToCart
};
