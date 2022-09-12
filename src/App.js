import { Routes, Route } from "react-router-dom";
import { LoginPage, SignUpPage, ForgotPage } from "./pages";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
      </Routes>
    </div>
  );
}

export default App;
