import axios from "axios";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import CartItems from "../Home/CartItems/CartItems";
import ErrorImage from "./images/error-image-photo-icon.webp";

const ProductDetail = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cartData, setCardData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [sameCartData, setSameCartData] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const resData = await axios.get(
          `https://harmonious-gift-7f42955e82.strapiapp.com/api/shops/${params.shopId}?populate=*`
        );
        setCardData(resData.data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, [params.shopId]);
  useEffect(() => {
    async function fetchData() {
      try {
        const resData = await axios.get(
          "https://harmonious-gift-7f42955e82.strapiapp.com/api/shops?populate=*"
        );
        setSameCartData(
          resData.data.data.filter((item) => {
            if (item.id % 2 == 1 && item.id < 19) {
              return item;
            }
          })
        );
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const resData = await axios.get(
          "https://harmonious-gift-7f42955e82.strapiapp.com/api/reviews?populate=*"
        );
        setReviewData(resData.data.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
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
    return <div>Error: Unable to load data</div>;
  }

  return (
    <>
      {
        <div className="ProductDetail">
          <div className="ProductDetail_cartDetail">
            <div className="ProductDetail_cartDetail_image">
              <img
                src={cartData?.imgUrl?.url || ErrorImage}
                alt="Product Image"
              />
            </div>
            <div className="ProductDetail_cartDetail_title">
              <h1>One Life Graphic T-shirt</h1>
              <div className="ProductDetail_cartDetail_title_rates">
                <div className="ProductDetail_cartDetail_title_stars">
                  <span>
                    <svg
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                        fill="#FFC633"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                        fill="#FFC633"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                        fill="#FFC633"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                        fill="#FFC633"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                        fill="#FFC633"
                      />
                    </svg>
                  </span>
                </div>
                <h3>
                  {cartData.rateNumber}/<span>5</span>
                </h3>
              </div>
              <div className="ProductDetail_cartDetail_title_prices">
                <h2>${cartData.cost}</h2>
                {cartData?.oldPrice ? <h4>{cartData.oldPrice}</h4> : ""}
                {cartData?.discount ? <h5>{cartData.discount}</h5> : ""}
              </div>
              <p>
                {cartData?.description ||
                  "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."}
              </p>
              <div className="ProductDetail_cartDetail_title_colors">
                <h3>Select Colors</h3>
                <div className="ProductDetail_cartDetail_title_colors_row">
                  <div className="ProductDetail_cartDetail_title_colors_item">
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5306 2.03063L5.5306 10.0306C5.46092 10.1005 5.37813 10.156 5.28696 10.1939C5.1958 10.2317 5.09806 10.2512 4.99935 10.2512C4.90064 10.2512 4.8029 10.2317 4.71173 10.1939C4.62057 10.156 4.53778 10.1005 4.4681 10.0306L0.968098 6.53063C0.898333 6.46087 0.842993 6.37804 0.805236 6.28689C0.76748 6.19574 0.748047 6.09804 0.748047 5.99938C0.748047 5.90072 0.76748 5.80302 0.805236 5.71187C0.842993 5.62072 0.898333 5.53789 0.968098 5.46813C1.03786 5.39837 1.12069 5.34302 1.21184 5.30527C1.30299 5.26751 1.40069 5.24808 1.49935 5.24808C1.59801 5.24808 1.69571 5.26751 1.78686 5.30527C1.87801 5.34302 1.96083 5.39837 2.0306 5.46813L4.99997 8.4375L12.4693 0.969379C12.6102 0.828483 12.8013 0.749329 13.0006 0.749329C13.1999 0.749329 13.391 0.828483 13.5318 0.969379C13.6727 1.11028 13.7519 1.30137 13.7519 1.50063C13.7519 1.69989 13.6727 1.89098 13.5318 2.03188L13.5306 2.03063Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="ProductDetail_cartDetail_title_colors_item"></div>
                  <div className="ProductDetail_cartDetail_title_colors_item"></div>
                </div>
              </div>
              <div className="ProductDetail_cartDetail_title_size">
                <h3>Choose Size</h3>
                <div className="ProductDetail_cartDetail_title_size_row">
                  <div className="ProductDetail_cartDetail_title_size_item">
                    Small
                  </div>
                  <div className="ProductDetail_cartDetail_title_size_item">
                    Medium
                  </div>
                  <div className="ProductDetail_cartDetail_title_size_item">
                    Large
                  </div>
                  <div className="ProductDetail_cartDetail_title_size_item">
                    X-Large
                  </div>
                </div>
              </div>
              <div className="ProductDetail_cartDetail_title_addBtn">
                <div className="ProductDetail_cartDetail_title_addBtn_counter">
                  <button>-</button>
                  <p>{count}</p>
                  <button>+</button>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="ProductDetail_reviews">
            <div className="ProductDetail_reviews_tab">
              <div className="ProductDetail_reviews_tab_item">
                Product Details
              </div>
              <div className="ProductDetail_reviews_tab_item">
                Rating & Reviews
              </div>
              <div className="ProductDetail_reviews_tab_item">FAQs</div>
            </div>
            <div className="ProductDetail_reviews_tab_options">
              <div className="ProductDetail_reviews_tab_options_title">
                All Reviews <span>(451)</span>
              </div>
              <div className="ProductDetail_reviews_tab_options_buttons">
                <div className="ProductDetail_reviews_tab_options_buttons_item">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.125 9.625V18.25C12.125 18.5484 12.0065 18.8345 11.7955 19.0455C11.5845 19.2565 11.2984 19.375 11 19.375C10.7016 19.375 10.4155 19.2565 10.2045 19.0455C9.99353 18.8345 9.875 18.5484 9.875 18.25V9.625C9.875 9.32663 9.99353 9.04048 10.2045 8.8295C10.4155 8.61853 10.7016 8.5 11 8.5C11.2984 8.5 11.5845 8.61853 11.7955 8.8295C12.0065 9.04048 12.125 9.32663 12.125 9.625ZM17.75 16C17.4516 16 17.1655 16.1185 16.9545 16.3295C16.7435 16.5405 16.625 16.8266 16.625 17.125V18.25C16.625 18.5484 16.7435 18.8345 16.9545 19.0455C17.1655 19.2565 17.4516 19.375 17.75 19.375C18.0484 19.375 18.3345 19.2565 18.5455 19.0455C18.7565 18.8345 18.875 18.5484 18.875 18.25V17.125C18.875 16.8266 18.7565 16.5405 18.5455 16.3295C18.3345 16.1185 18.0484 16 17.75 16ZM20 12.25H18.875V1.75C18.875 1.45163 18.7565 1.16548 18.5455 0.954505C18.3345 0.743526 18.0484 0.625 17.75 0.625C17.4516 0.625 17.1655 0.743526 16.9545 0.954505C16.7435 1.16548 16.625 1.45163 16.625 1.75V12.25H15.5C15.2016 12.25 14.9155 12.3685 14.7045 12.5795C14.4935 12.7905 14.375 13.0766 14.375 13.375C14.375 13.6734 14.4935 13.9595 14.7045 14.1705C14.9155 14.3815 15.2016 14.5 15.5 14.5H20C20.2984 14.5 20.5845 14.3815 20.7955 14.1705C21.0065 13.9595 21.125 13.6734 21.125 13.375C21.125 13.0766 21.0065 12.7905 20.7955 12.5795C20.5845 12.3685 20.2984 12.25 20 12.25ZM4.25 13C3.95163 13 3.66548 13.1185 3.4545 13.3295C3.24353 13.5405 3.125 13.8266 3.125 14.125V18.25C3.125 18.5484 3.24353 18.8345 3.4545 19.0455C3.66548 19.2565 3.95163 19.375 4.25 19.375C4.54837 19.375 4.83452 19.2565 5.0455 19.0455C5.25647 18.8345 5.375 18.5484 5.375 18.25V14.125C5.375 13.8266 5.25647 13.5405 5.0455 13.3295C4.83452 13.1185 4.54837 13 4.25 13ZM6.5 9.25H5.375V1.75C5.375 1.45163 5.25647 1.16548 5.0455 0.954505C4.83452 0.743526 4.54837 0.625 4.25 0.625C3.95163 0.625 3.66548 0.743526 3.4545 0.954505C3.24353 1.16548 3.125 1.45163 3.125 1.75V9.25H2C1.70163 9.25 1.41548 9.36853 1.2045 9.5795C0.993526 9.79048 0.875 10.0766 0.875 10.375C0.875 10.6734 0.993526 10.9595 1.2045 11.1705C1.41548 11.3815 1.70163 11.5 2 11.5H6.5C6.79837 11.5 7.08452 11.3815 7.2955 11.1705C7.50647 10.9595 7.625 10.6734 7.625 10.375C7.625 10.0766 7.50647 9.79048 7.2955 9.5795C7.08452 9.36853 6.79837 9.25 6.5 9.25ZM13.25 4.75H12.125V1.75C12.125 1.45163 12.0065 1.16548 11.7955 0.954505C11.5845 0.743526 11.2984 0.625 11 0.625C10.7016 0.625 10.4155 0.743526 10.2045 0.954505C9.99353 1.16548 9.875 1.45163 9.875 1.75V4.75H8.75C8.45163 4.75 8.16548 4.86853 7.9545 5.0795C7.74353 5.29048 7.625 5.57663 7.625 5.875C7.625 6.17337 7.74353 6.45952 7.9545 6.6705C8.16548 6.88147 8.45163 7 8.75 7H13.25C13.5484 7 13.8345 6.88147 14.0455 6.6705C14.2565 6.45952 14.375 6.17337 14.375 5.875C14.375 5.57663 14.2565 5.29048 14.0455 5.0795C13.8345 4.86853 13.5484 4.75 13.25 4.75Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="ProductDetail_reviews_tab_options_buttons_item">
                  Latest
                  <span>
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5306 1.53061L6.5306 6.53061C6.46092 6.60053 6.37813 6.65601 6.28696 6.69386C6.1958 6.73172 6.09806 6.7512 5.99935 6.7512C5.90064 6.7512 5.8029 6.73172 5.71173 6.69386C5.62057 6.65601 5.53778 6.60053 5.4681 6.53061L0.468098 1.53061C0.327202 1.38972 0.248047 1.19862 0.248047 0.999362C0.248047 0.800105 0.327202 0.609009 0.468098 0.468112C0.608994 0.327216 0.800091 0.248062 0.999348 0.248062C1.19861 0.248062 1.3897 0.327216 1.5306 0.468112L5.99997 4.93749L10.4693 0.467488C10.6102 0.326592 10.8013 0.247437 11.0006 0.247437C11.1999 0.247437 11.391 0.326592 11.5318 0.467488C11.6727 0.608384 11.7519 0.79948 11.7519 0.998738C11.7519 1.198 11.6727 1.38909 11.5318 1.52999L11.5306 1.53061Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
                <div className="ProductDetail_reviews_tab_options_buttons_item">
                  Write a Review
                </div>
              </div>
            </div>
            <div className="ProductDetail_reviews_row">
              {reviewData.map((item) => (
                <div key={item.id} className="ProductDetail_reviews_row_col">
                  <div className="ProductDetail_reviews_row_col_options">
                    <div className="ProductDetail_reviews_row_col_options_stars">
                      <span>
                        <svg
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                            fill="#FFC633"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                            fill="#FFC633"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                            fill="#FFC633"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                            fill="#FFC633"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                            fill="#FFC633"
                          />
                        </svg>
                      </span>
                    </div>
                    <button>
                      <svg
                        width="22"
                        height="6"
                        viewBox="0 0 22 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.625 3C13.625 3.51918 13.471 4.02669 13.1826 4.45837C12.8942 4.89005 12.4842 5.2265 12.0045 5.42518C11.5249 5.62386 10.9971 5.67585 10.4879 5.57456C9.97869 5.47328 9.51096 5.22327 9.14385 4.85616C8.77673 4.48904 8.52673 4.02131 8.42544 3.51211C8.32415 3.00291 8.37614 2.47511 8.57482 1.99546C8.7735 1.5158 9.10995 1.10583 9.54163 0.817392C9.97331 0.528953 10.4808 0.375 11 0.375C11.6962 0.375 12.3639 0.651562 12.8562 1.14384C13.3484 1.63613 13.625 2.30381 13.625 3ZM3.5 0.375C2.98083 0.375 2.47331 0.528953 2.04163 0.817392C1.60995 1.10583 1.2735 1.5158 1.07482 1.99546C0.876137 2.47511 0.824154 3.00291 0.92544 3.51211C1.02673 4.02131 1.27673 4.48904 1.64385 4.85616C2.01096 5.22327 2.47869 5.47328 2.98789 5.57456C3.49709 5.67585 4.02489 5.62386 4.50455 5.42518C4.9842 5.2265 5.39417 4.89005 5.68261 4.45837C5.97105 4.02669 6.125 3.51918 6.125 3C6.125 2.30381 5.84844 1.63613 5.35616 1.14384C4.86387 0.651562 4.19619 0.375 3.5 0.375ZM18.5 0.375C17.9808 0.375 17.4733 0.528953 17.0416 0.817392C16.61 1.10583 16.2735 1.5158 16.0748 1.99546C15.8761 2.47511 15.8242 3.00291 15.9254 3.51211C16.0267 4.02131 16.2767 4.48904 16.6438 4.85616C17.011 5.22327 17.4787 5.47328 17.9879 5.57456C18.4971 5.67585 19.0249 5.62386 19.5045 5.42518C19.9842 5.2265 20.3942 4.89005 20.6826 4.45837C20.971 4.02669 21.125 3.51918 21.125 3C21.125 2.65528 21.0571 2.31394 20.9252 1.99546C20.7933 1.67698 20.5999 1.3876 20.3562 1.14384C20.1124 0.900091 19.823 0.706735 19.5045 0.574816C19.1861 0.442897 18.8447 0.375 18.5 0.375Z"
                          fill="black"
                          fillOpacity="0.4"
                        />
                      </svg>
                    </button>
                  </div>
                  <h1>
                    {item.firstName}
                    <span>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0.828979C8.07164 0.828979 6.18657 1.40081 4.58319 2.47215C2.97982 3.54349 1.73013 5.06624 0.992179 6.84782C0.254225 8.6294 0.061142 10.5898 0.437348 12.4811C0.813554 14.3724 1.74215 16.1097 3.10571 17.4733C4.46928 18.8368 6.20656 19.7654 8.09787 20.1416C9.98919 20.5178 11.9496 20.3248 13.7312 19.5868C15.5127 18.8489 17.0355 17.5992 18.1068 15.9958C19.1782 14.3924 19.75 12.5073 19.75 10.579C19.7473 7.99396 18.7192 5.51559 16.8913 3.6877C15.0634 1.85982 12.585 0.831709 10 0.828979ZM14.2806 8.8596L9.03063 14.1096C8.96097 14.1793 8.87826 14.2347 8.78721 14.2724C8.69616 14.3101 8.59857 14.3296 8.5 14.3296C8.40144 14.3296 8.30385 14.3101 8.2128 14.2724C8.12175 14.2347 8.03903 14.1793 7.96938 14.1096L5.71938 11.8596C5.57865 11.7189 5.49959 11.528 5.49959 11.329C5.49959 11.13 5.57865 10.9391 5.71938 10.7984C5.86011 10.6576 6.05098 10.5786 6.25 10.5786C6.44903 10.5786 6.6399 10.6576 6.78063 10.7984L8.5 12.5187L13.2194 7.79835C13.2891 7.72867 13.3718 7.6734 13.4628 7.63568C13.5539 7.59797 13.6515 7.57856 13.75 7.57856C13.8486 7.57856 13.9461 7.59797 14.0372 7.63568C14.1282 7.6734 14.2109 7.72867 14.2806 7.79835C14.3503 7.86804 14.4056 7.95076 14.4433 8.04181C14.481 8.13285 14.5004 8.23043 14.5004 8.32898C14.5004 8.42753 14.481 8.52511 14.4433 8.61615C14.4056 8.7072 14.3503 8.78992 14.2806 8.8596Z"
                          fill="#01AB31"
                        />
                      </svg>
                    </span>
                  </h1>
                  <p>{item.description[0].children[0].text}</p>
                  <div className="ProductDetail_reviews_row_col_date">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
            <button>Load More Reviews</button>
          </div>
          <CartItems title={"You might also like"} data={sameCartData} />
        </div>
      }
    </>
  );
};

export default ProductDetail;
