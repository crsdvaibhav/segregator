import Main from './components/main'
import Educate from './components/educate'
import { Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div className="h-[100%] bg-[#5cdb95]">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/educate' element={<Educate/>} />
      </Routes>
    </div>
  );
}

export default App;
