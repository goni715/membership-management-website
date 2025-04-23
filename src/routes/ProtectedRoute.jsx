import { currentAccessToken } from "@/redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const accessToken = useSelector(currentAccessToken);

  const { pathname } = useLocation();

  if (!accessToken) {
    return <Navigate to="/login" state={pathname} />;
  }
  return children;
};

export default ProtectedRoute;
