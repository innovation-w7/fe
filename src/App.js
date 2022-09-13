import { Routes, Route } from "react-router-dom";
import Category from "./components/main/Category";
import Loading from "./pages/Loading";
import Main from "./pages/Main";
import Detail from "./components/detail/Detail";
import CategoryList from "./components/main/CategoryList";
import { LoginPage, SignUpPage, ForgotPage } from "./pages";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tag/:category" element={<Category />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
      </Routes>
    </div>
  );
}

export default App;
