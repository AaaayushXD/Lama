import { OtherUsers, UserWidget } from "./homeComponents";
import "../../index.css";
import { MainContainer } from "../Post/Post";
import NavBar from "../NavBar/navBar";
import { useSelector } from "react-redux";


export const HomeContainer = () => {
  const {_id, picturePath} = useSelector(state => state.user)
  return (
    <div className="flex flex-col w-full h-full">
      <NavBar />
      <div className="flex w-full h-full">
        <UserWidget userId={_id} picturePath={picturePath} />
        <MainContainer />
        <OtherUsers />
      </div>
    </div>
  );
}

 