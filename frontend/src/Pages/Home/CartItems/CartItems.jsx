import React from "react";
import { Link } from "react-router-dom";
const CartItems = ({ title, data }) => {
  return (
    <div className="CartItems">
      <h1>{title}</h1>
      <div className="CartItems_row">
        {data.map((cart) => (
          <Link
            to={`/shop/${cart.documentId}`}
            key={cart.id}
            className="CartItems_row_col"
          >
            <div className="CartItems_row_col_img">
              <img src={cart.imgUrl.url} alt="" />
            </div>
            <h3>{cart.productName}</h3>
            <div className="CartItems_row_col_rates">
              <div className="CartItems_row_col_rates_stars">
                <div className="CartItems_row_col_rates_stars_item">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div className="CartItems_row_col_rates_stars_item">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div className="CartItems_row_col_rates_stars_item">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div className="CartItems_row_col_rates_stars_item">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div className="CartItems_row_col_rates_stars_item">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
              </div>
              <div className="CartItems_row_col_rates_count">
                {cart.rateNumber}/<span>5</span>
              </div>
            </div>
            <h2>${cart.cost}</h2>
          </Link>
        ))}
      </div>
      <Link to={"/Shop"} className="CartItems_btn">
        View All
      </Link>
    </div>
  );
};

export default CartItems;
