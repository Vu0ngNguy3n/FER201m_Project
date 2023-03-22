import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Dashboard from "./pages/Dashboard/Dashboard";

import "bootstrap/dist/css/bootstrap.css";
import { createContext, useContext, useState } from "react";
import AddFilm from "./pages/AddFilm/AddFilm";
import EditFilm from "./pages/EditFilm/EditFilm";
export const AccountContext = createContext();

function App() {
  const [account, setAccount] = useState();

  return (
    <AccountContext.Provider value={{account, setAccount}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/addfilm" element={<AddFilm/>} />
          <Route path="/editfilm/:id" element={<EditFilm/>}/>
        </Routes>
      </BrowserRouter>
    </AccountContext.Provider>
  );
}

export default App;
