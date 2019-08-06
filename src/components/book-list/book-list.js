import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { withBookstoreService } from "../hoc";
import {
  booksLoaded,
  booksRequested,
  booksError,
  bookAddedToCart,
  fetchBooks
} from "../../actions";
import { compose } from "../../utils";

import "./book-list.css";

class BookListContainer extends Component {
  componentDidMount() {
    // 1. receive data
    // const {
    //   bookstoreService,
    //   booksLoaded,
    //   booksRequested,
    //   booksError
    // } = this.props;
    // booksRequested();
    // bookstoreService
    //   .getBooks()
    //   .then(data => booksLoaded(data))
    //   .catch(err => booksError(err));
    this.props.fetchBooks();
    // 2. dispacth action to store
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) return <Spinner />;
    if (error) return <ErrorIndicator error={error} />;
    return <BookList onAddedToCart={onAddedToCart} books={books} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooks: fetchBooks(ownProps.bookstoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id))
  };
};
const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem
              onAddedToCart={() => onAddedToCart(book.id)}
              book={book}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
