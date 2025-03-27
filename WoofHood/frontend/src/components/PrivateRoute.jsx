import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const authUser = useAuthStore((state) => state.authUser);
  return authUser ? children : <Navigate to="/" />;
};

export default PrivateRoute;
