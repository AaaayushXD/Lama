import { RegisterForm } from "./Components/Auth/auth";
import Home from "./Components/Home/homePage";
import NavBar, { AuthNav } from "./Components/NavBar/navBar";

function App() {

  return (
    <div>
      <AuthNav />
      {/* <NavBar /> */}
      {/* <Home /> */}
      <RegisterForm />
    </div>
  );
}

export default App
