import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/moviedetail/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
