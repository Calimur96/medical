import "./App.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
