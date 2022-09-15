import { Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import Main from './pages/Main';
import Detail from './components/detail/Detail';
import { LoginPage, SignUpPage, ForgotPage } from './pages';
import Mypage from './pages/Mypage';
import Search from './components/main/Search';
import SearchKeyword from './components/main/SearchKeyword';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tag/:category" element={<CategoryPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/profile" element={<Mypage />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/search" element={<SearchKeyword />} />
      </Routes>
    </div>
  );
}

export default App;
