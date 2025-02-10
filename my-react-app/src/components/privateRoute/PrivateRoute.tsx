import { Navigate, Outlet } from "react-router-dom";
import RootLayout from "../rootLayout.tsx/RootLayout";

const PrivateRoute = () => {
  const token = localStorage.getItem("token"); // Get token from localStorage

  return token ? <RootLayout /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
