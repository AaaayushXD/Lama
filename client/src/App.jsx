import { LoginPage, RegisterPage } from "./Components/Auth/auth";
import Home from "./Components/Home/homePage";
import NavBar, { AuthNav } from "./Components/NavBar/navBar";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Profile } from "./Components/Profile/profile";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
