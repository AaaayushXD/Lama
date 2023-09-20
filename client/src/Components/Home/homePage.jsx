import { UserInfo, OtherUsers } from "./homeComponents";
import "../../index.css";
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
 