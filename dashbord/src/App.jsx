import EmailVerification from "./pages/EmailVerification/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Otp from "./pages/otp/Otp";
import Registration from "./pages/registration/Registration";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/registration" index element={<Registration />} />
        <Route path="/forgotpass" index element={<ForgotPassword />} />
        <Route path="/otpVerification/:email" element={<Otp />} />
        <Route
          path="/emailVerification/:token"
          element={<EmailVerification />}
        />
        <Route path="/login" element={<Login />} />
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
