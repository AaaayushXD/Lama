import { UserInfo, OtherUsers } from "./homeComponents";
import "../../index.css";
import { MainContainer } from "../Post/Post";
import NavBar from "../NavBar/navBar";


export const HomeContainer = () => {
  return (
    <div className="flex w-full h-full">
      <UserInfo />
      <MainContainer />
      <OtherUsers />
    </div>
  );
}


function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <NavBar />
      <HomeContainer />
    </div>
  )
}

export default Home;
 