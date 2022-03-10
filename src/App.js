import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserList from './component/UserList.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
