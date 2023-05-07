import { useEffect } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./store/auth";

function App() {
  const { getLogin, getSessionUser } = useAuth();

  useEffect(() => {
    getLogin("asdasd@gmail.com", "123456");
    // getSessionUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
