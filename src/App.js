import { Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import Main from './pages/Main';
import Detail from './components/detail/Detail';
import { LoginPage, SignUpPage, ForgotPage } from './pages';
import Mypage from './pages/Mypage';

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
      </Routes>
    </div>
  );
}

export default App;
