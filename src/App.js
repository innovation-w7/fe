import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./components/detail/Detail";
import { Navigate } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  ForgotPage,
  SettingPage,
  DeletePage,
  CategoryPage,
} from "./pages";
import MyPage from "./pages/MyPage";
import Search from "./components/main/Search";
import SearchKeyword from "./components/main/SearchKeyword";


function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/tag/:category" element={<CategoryPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/profile" element={<MyPage />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/search" element={<SearchKeyword />} />
        <Route path="/delete" element={<DeletePage />} />
      </Routes>
    </div>
  );
}

export default App;
