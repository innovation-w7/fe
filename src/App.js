import { Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
}

export default App;
