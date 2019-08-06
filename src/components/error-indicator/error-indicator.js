import React from "react";
import "./error-indicator.css";

const ErrorIndicator = ({ error }) => {
  console.log(error);

  return <div>Error! {error.message}</div>;
};

export default ErrorIndicator;
