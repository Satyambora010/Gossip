import Login from "./Components/Login";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import { ContextWrapperProvider } from "./Components/ContextWrapper";

const App = () => {
  return (
    <ContextWrapperProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ContextWrapperProvider>
  );
};

export default App;
