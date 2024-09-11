import { Navigate } from "react-router-dom";

const ProtectedRoute = (props: {
  isLoggedIn: boolean;
  children: React.ReactNode;
}) => {
  if (props.isLoggedIn) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
