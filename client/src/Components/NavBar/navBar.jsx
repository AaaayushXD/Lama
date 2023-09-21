import LOGO from "../../assets/aayushlogo.png";

const NavBar = () => {
  return (
    <div className="navContainer h-[80px] w-full flex justify-between items-center  bg-[var(--navbar-dark)]">
      <div className="mx-4 cursor-pointer logo">
        <a href="/">
          <img
            src={LOGO}
            style={{ width: "50px", height: "50px" }}
            alt="logo"
          />
        </a>
      </div>
      <div className="mx-4 cursor-pointer userIcon hover:text-[var(--bgText-dark)]">
        <span className="text-5xl material-symbols-outlined text-[var(-text-dark)]">
          account_circle
        </span>
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
  return (
    <div className="mx-4 cursor-pointer userIcon hover:text-[var(--bgText-dark)] bg-[var(--surface-dark)] p-3 rounded-full w-[50px] h-[50px] flex  items-center justify-center">
      <span class="material-symbols-outlined text-3xl">dark_mode</span>
    </div>
  );
}