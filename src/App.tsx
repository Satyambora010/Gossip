import Login from "./Components/Login";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Home setIsLoggedIn={setIsLoggedIn} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
