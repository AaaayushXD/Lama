import { UserInfo, NameContainer, OtherUsers } from "./homeComponents";
import "../../index.css";
import LOGO1 from "../../assets/avatar/avatar1.png";
import { MainContainer } from "../Post/Post";

function Home() {
  return (
    <div className="flex w-full h-full">
      <UserInfo />
      <MainContainer />
      <OtherUsers />
    </div>
  );
}

export default Home;
 