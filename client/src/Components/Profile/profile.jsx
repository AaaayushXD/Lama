import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/navBar";
import { InfoDetail } from "../Home/homeComponents";
import { PostsContainer } from "../Post/Post";
import { UpdatePost } from "../Post/postComponents";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;

  return (
    <div className="flex flex-col w-full h-full">
      <NavBar />
      <div className="flex flex-col w-full h-full p-2">
        <div className="flex justify-center w-full">
          <div className="w-full md:w-[80%]">
            <UpdatePost picturePath={user.picturePath} />
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full mt-3">
          {/* <UserWidget userId={userId} picturePath={user.picturePath} /> */}
          <div className="flex p-4 m-2 infoContainer w-full md:w-[60%] h-full bg-[var(--surface-dark)] rounded-lg lg:flex-wrap overflow-wrap-break-word lg:justify-center">
            <div className=" mainUser">
              <div
                className="flex flex-col items-center justify-center w-full h-full cursor-pointer nameContainer "
                onClick={() => navigate(`/profile/${userId}`)}
              >
                <div className="flex flex-col items-center justify-center w-full h-full mr-7 nameContent md:flex-row">
                  <img
                    src={`http://localhost:3001/assets/${user.picturePath}`}
                    className="object-cover mx-3 my-1 w-[80px] h-[80px] lg:w-[50px] lg:h-[50px]"
                  />
                  <p className="hidden text-xl lg:block"> {user.fullName}</p>
                </div>
              </div>
            </div>
            <div className="userAccInfo text-xl text-[var(--bgText-dark)] flex flex-col w-full mt-4 justify-center items-center">
              <div className="w-full h-full text-[var(--primary-dark)] lg:hidden pb-5 ">
                <p className="text-2xl text-center">{user.fullName}</p>
              </div>
              <InfoDetail detail={user.education} icon="school" />
              <InfoDetail detail={user.occupation} icon="work" />
              <InfoDetail detail={user.phone} icon="phone" />
              <InfoDetail detail={user.address} icon="pin_drop" />
            </div>
          </div>
        </div>

        <div className="flex-col w-full h-full lg:justify-center lg:items-center lg:flex mt-7">
          <h1 className="p-4 text-4xl text-center text-[var(--primary-dark)]">
            Posts
          </h1>
          <div className="lg:w-[80%] p-3">
            <PostsContainer userId={userId} isProfile={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
