import { Navigate } from "react-router-dom";
import { ContextWrapper } from "./ContextWrapper";
import { useContext } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useContext(ContextWrapper);
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
