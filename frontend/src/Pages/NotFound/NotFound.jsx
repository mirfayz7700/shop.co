import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  let error = useRouteError();
  console.error(error);
  return <div>NotFound</div>;
};

export default NotFound;
