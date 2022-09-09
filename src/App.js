import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
