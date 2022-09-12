import { Routes, Route } from 'react-router-dom';
import Category from './components/main/Category';
import Loading from './pages/Loading';
import Main from './pages/Main';
import Detail from './components/detail/Detail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/tag/:category" element={<Category />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
