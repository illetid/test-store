export const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      error: null,
      loading: true
    };
  }
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        books: state.books,
        error: null,
        loading: true
      };

    case "FETCH_BOOKS_SUCCESS":
      return {
        books: action.payload,
        error: null,
        loading: false
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        books: [],
        loading: false,
        error: action.payload
      };
    default:
      return state.bookList;
  }
};
