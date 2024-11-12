import EmailVerification from "./pages/EmailVerification/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import NewPassword from "./pages/NewPassword/NewPassword";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./pages/Dashbord/Dashboard";
import AddCategory from "./pages/AddCaterory/AddCategory";
import AddSubCategory from "./pages/AddSubCategory/AddSubCategory";
import ViewCategory from "./pages/ViewCategory/ViewCategory";
import ViewSubCategory from "./pages/ViewSubCategory/ViewSubCategory";
import AddProduct from "./pages/AddProduct/AddProduct";
import ViewProduct from "./pages/VewProduct/ViewProduct";
import FlashSale from "./pages/FlashSale/FlashSale";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/registration" index element={<Registration />} />
        <Route path="/forgotpass" index element={<ForgotPassword />} />
        <Route path="/newpass/:token" index element={<NewPassword />} />
        <Route
          path="/emailVerification/:token"
          element={<EmailVerification />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-category" element={<AddCategory />} />
          <Route path="add-sub-category" element={<AddSubCategory />} />
          <Route path="view-category" element={<ViewCategory />} />
          <Route path="view-sub-category" element={<ViewSubCategory />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="view-product" element={<ViewProduct />} />
          <Route path="add-flash" element={<FlashSale />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
