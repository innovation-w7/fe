import { Routes, Route } from "react-router-dom";
import { LoginPage, SignUpPage } from "./pages";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
