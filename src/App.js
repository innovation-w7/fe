import { Routes, Route } from 'react-router-dom';
import Category from './components/main/Category';
import Main from './pages/Main';
import Detail from './components/detail/Detail';
import { LoginPage, SignUpPage, ForgotPage } from './pages';
import MyLike from './components/detail/MyLike';

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
        <Route path="/mylike" element={<MyLike />} />
      </Routes>
    </div>
  );
}

export default App;
