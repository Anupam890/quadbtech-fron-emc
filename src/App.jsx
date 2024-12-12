import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import Home from "./pages/Home/Home";
//Admin Components
import MainDash from "./pages/Admin/MainDash";
import Dashboard from "./pages/Admin/components/Dashboard";
import Products from "./pages/Admin/components/Products";
import ProductStock from "./pages/Admin/components/Productstock";
import Shop from "./pages/Home/homePage/Shop";
import ContactUs from "./pages/Home/homePage/ContactUs";
import Product from "./pages/Home/homePage/Product";
import FirstHome from "./pages/Home/homePage/FirstHome";
import CartDisplay from './pages/cart/CartDisplay'; 
import EditProduct from "./pages/Admin/components/EditProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <FirstHome />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "cart",
        element: <CartDisplay />,
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <MainDash />,
    children: [
      {index: true,
        path: "dash",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: "edit-product", 
            element: <EditProduct />,
          },
          {
            path:"edit-product/:id",
            element: <EditProduct />
          }
        ],
      },
      {
        path: "favorites",
        element: <h1>Favourites</h1>,
      },
      {
        path: "inbox",
        element: <h1>Inbox</h1>,
      },
      {
        path: "order-list",
        element: <h1>Order List</h1>,
      },
      {
        path: "product-stock",
        element: <ProductStock />,
      },
      {
        path: "edit-product",
        element: <EditProduct />,
      }
    ]
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
