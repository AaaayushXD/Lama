import { useState } from "react";
import LOGO from "../../assets/aayushlogo.png";
import { useNavigate } from "react-router-dom";
import { setMode, setLogout } from "../state";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);
  // const fullName = user.fullName;

  return (
    <div className=" navContainer h-[80px] w-full flex justify-between items-center  bg-[var(--navbar-dark)]">
      <div className="mx-4 cursor-pointer logo">
        <a href="/home">
          <img
            src={LOGO}
            style={{ width: "50px", height: "50px" }}
            alt="logo"
          />
        </a>
      </div>
      <div className="hidden gap-8 mx-4 cursor-pointer md:flex userIcon">
        <span className="text-4xl material-symbols-outlined text-[var(--text-dark)] hover:text-[var(--bgText-dark)]">
          Notifications
        </span>
        <span
          className="text-4xl material-symbols-outlined text-[var(--text-dark)] hover:text-[var(--bgText-dark)]"
          onClick={() => navigate("/msg")}
        >
          Chat
        </span>
        <span
          className="text-4xl material-symbols-outlined text-[var(--text-dark)] hover:text-[var(--bgText-dark)]"
          onClick={() => navigate("/profile")}
        >
          account_circle
        </span>
        <span
          className="text-4xl material-symbols-outlined text-[var(--secondary-dark)] hover:text-[var(--secondary-light)]"
          onClick={() => dispatch(setLogout())}
        >
          logout
        </span>
      </div>
      <div className="flex flex-col mr-5 md:hidden">
        {/* Mobile Nav */}
        {toggleMenu ? (
          <div className="absolute top-0 left-0 w-screen h-screen bg-[var(--overlay-dark)] z-10 flex flex-col gap-10 items-center">
            <span
              className="text-4xl material-symbols-outlined text-[var(--text-dark)] hover:text-[var(--bgText-dark)] cursor-pointer mt-10 "
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              close
            </span>
            <div
              className="flex items-center justify-center gap-2 cursor-pointer w-[80%] border-b p-4 border-b-[var(--modal-dark)] hover:bg-[var(--surface-dark)] rounded-2xl"
              onClick={() => navigate("/profile")}
            >
              <span className="text-4xl material-symbols-outlined text-[var(--text-dark)] ">
                account_circle
              </span>
              <p>Aayush Lamichhane</p>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer w-[80%] border-b p-4 border-b-[var(--modal-dark)] hover:bg-[var(--surface-dark)] rounded-2xl">
              <span className="text-4xl material-symbols-outlined text-[var(--text-dark)] ">
                Notifications
              </span>
              <p>Notifications</p>
            </div>
            <div
              className="flex items-center justify-center gap-2 cursor-pointer w-[80%] border-b p-4 border-b-[var(--modal-dark)] hover:bg-[var(--surface-dark)] rounded-2xl"
              onClick={() => navigate("/msg")}
            >
              <span className="text-4xl material-symbols-outlined text-[var(--text-dark)]">
                Chat
              </span>
              <p>Messages</p>
            </div>
            <div
              className="flex items-center justify-center gap-2 cursor-pointer w-[80%] border-b p-4 border-b-[var(--modal-dark)] hover:bg-[var(--surface-dark)] rounded-2xl hover:text-[var(--secondary-dark)]"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <span className="text-4xl material-symbols-outlined">Logout</span>
              <p>Log Out</p>
            </div>
          </div>
        ) : (
          <div>
            <span
              className="text-4xl material-symbols-outlined text-[var(--text-dark)] hover:text-[var(--bgText-dark)] cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Menu
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

export const AuthNav = (props) => {
  return (
    <div className="navContainer h-[80px] w-full flex justify-between items-center">
      <div className="mx-4 cursor-pointer logo">
        <a href="/">
          <img
            src={LOGO}
            style={{ width: "50px", height: "50px" }}
            alt="logo"
          />
        </a>
      </div>
      <DarkToLight />
    </div>
  );
};

export const DarkToLight = () => {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <div className="mr-8 cursor-pointer userIcon hover:text-[var(--bgText-dark)] bg-[var(--surface-dark)] p-3 rounded-full w-[50px] h-[50px] flex  items-center justify-center">
      <button
        type="button"
        onClick={toggleDarkMode}
        className=" transition 0.3 ease-in-out"
      >
        {darkMode ? (
          <span className="pt-1 text-3xl pl-0.5 material-symbols-outlined">
            dark_mode
          </span>
        ) : (
          <span className="pt-1 text-3xl text-black material-symbols-outlined">
            light_mode
          </span>
        )}
      </button>
    </div>
  );
};
