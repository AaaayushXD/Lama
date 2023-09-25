import { AuthPage } from "./Components/Auth/auth";
import {HomeContainer} from "./Components/Home/homePage";
import NavBar, { AuthNav } from "./Components/NavBar/navBar";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Profile } from "./Components/Profile/profile";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token))
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={isAuth ? <HomeContainer /> : <Navigate to="/" />} />
          <Route path="/profile/:userId" element={isAuth ? <Profile /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
