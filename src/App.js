import { Route, Routes, useNavigate } from 'react-router-dom';
import { verifyIsLogged } from './utils/verifyIsLogged'
import TableTop from './Pages/TableTop';
import { useEffect } from 'react';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!verifyIsLogged()) {
      navigate("/login");
    }
    if (verifyIsLogged()) {
      navigate("/table-top")
    }
  }, []); //eslint-disable-line
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {verifyIsLogged() &&
        <Route path={"/table-top"} element={<TableTop />} />
      }
    </Routes>
  );
}

export default App;
