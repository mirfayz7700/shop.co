import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/Shop/ProductDetail.jsx";
import Cart from "./Pages/Cart/Cart";
import HomeLayouts from "./Layouts/HomeLayouts.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import ShopLayout from "./Layouts/ShopLayout.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ShopLayout />,
        children: [
          {
            index: true,
            path: "/shop",
            element: <Shop />,
          },
          {
            path: ":shopId",
            element: <ProductDetail />,
            errorElement: <NotFound />,
            loader: ({ params }) => {
              return params.shopId;
            },
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
