import React from "react";
import { connect } from "react-redux";
import "./shop-header.css";
import { Link } from "react-router-dom";
const ShopHeader = ({ numItems, total, orderTotal, count }) => {
  return (
    <header className="shop-header row">
      <Link className="logo text-dark" to="/">
        Test Store
      </Link>
      <Link className="shopping-cart" to="/cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {count} items (${orderTotal})
      </Link>
    </header>
  );
};
const mapStateToProps = store => {
  return {
    orderTotal: store.shoppingCart.cartItems.reduce(
      (acc, i) => acc + i.total,
      0
    ),
    count: store.shoppingCart.cartItems.reduce((acc, i) => acc + i.count, 0)
  };
};
export default connect(mapStateToProps)(ShopHeader);
