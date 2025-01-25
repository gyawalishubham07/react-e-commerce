import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTER_ROUTE,
} from "./constants/routes.js";
import MainLayout from "./layouts/MainLayout.jsx";
import ProductList from "./pages/products/List.jsx";
import ProductDetails from "./pages/products/Details.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import UnAuthLayout from "./layouts/UnAuthLayout.jsx";
import AddProduct from "./pages/products/Add.jsx";
import EditProduct from "./pages/products/Edit.jsx";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
          <Route path={PRODUCT_ROUTE}>
            <Route index element={<ProductList />} />
            <Route path={":id"} element={<ProductDetails />} />
            <Route path={"add"} element={<AddProduct />} />
            <Route path={"edit/:id"} element={<EditProduct />} />
          </Route>
        </Route>

        <Route element={<UnAuthLayout />}>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
