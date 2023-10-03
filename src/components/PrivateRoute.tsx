import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children?: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const auth = sessionStorage.getItem("token");

  if (!auth) {
    return <Navigate to="/Youtube-clone" />;
  }

  return children;
};

export default PrivateRoute;
