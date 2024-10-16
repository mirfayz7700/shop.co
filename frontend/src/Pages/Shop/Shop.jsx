import React, { useEffect, useState } from "react";
import axios from "axios";
import ShopCart from "./ShopCart";
import { RotatingLines } from "react-loader-spinner";

const Shop = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ApiKey =
    "https://harmonious-gift-7f42955e82.strapiapp.com/api/shops?populate=*";

  useEffect(() => {
    async function fetchData() {
      try {
        const resData = await axios.get(ApiKey);
        setData(resData.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <RotatingLines
          visible={true}
          height="32"
          width="32"
          strokeWidth="5"
          strokeColor="gray"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="shop_row">
      {data.map((item) => (
        <ShopCart data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Shop;
