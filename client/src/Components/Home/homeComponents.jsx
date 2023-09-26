import "../../index.css";
import LOGO1 from "../../assets/avatar/avatar1.png";
import LOGO2 from "../../assets/avatar/avatar2.png";
import LOGO3 from "../../assets/avatar/avatar3.png";
import LOGO4 from "../../assets/avatar/avatar4.png";
import LOGO5 from "../../assets/avatar/avatar5.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
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

  if (!user) {
    return null;
  }

  const { fullName, address, occupation, education, phone, friends } = user;

  return (
    <div className="hidden lg:flex p-4 m-2 infoContainer h-full w-[20%] bg-[var(--surface-dark)] rounded-lg lg:flex-wrap overflow-wrap-break-word">
      <div className="mainUser">
        <NameContainer
          click={() => navigate(`/profile/${userId}`)} 
          logo={picturePath}
          imgSize="50"
          name={fullName}
        />
      </div>
      <div className="userAccInfo text-xl text-[var(--bgText-dark)] flex flex-col w-full mt-4 justify-center items-center">
        <InfoDetail detail={education} icon="school" />
        <InfoDetail detail={occupation} icon="work" />
        <InfoDetail detail={phone} icon="phone" />
        <InfoDetail detail={address} icon="pin_drop" />
      </div>
    </div>
  );
};

export const NameContainer = (props) => {
  return (
    <div
      className="w-full h-full cursor-pointer nameContainer"
      onClick={props.click}
    >
      <div className="flex items-center w-full h-full nameContent">
        <img
          src={`http://localhost:3001/assets/${props.logo}`}
          style={{ width: `${props.imgSize}px`, height: `${props.imgSize}px` }}
          className="object-cover mx-3 my-1"
        />
        <p className="text-xl"> {props.name}</p>
      </div>
    </div>
  );
};

export const InfoDetail = (props) => {
  return (
    <div className="flex w-full mt-4 text-xl border-b border-[var(--border-dark)] userAccInfo gap-3 ">
      <span className="material-symbols-outlined w-[10%]">{props.icon}</span>
      <div className="w-[80%] flex flex-wrap pl-2 mb-2 ">
        <p className="w-full" style={{ wordWrap: "break-word" }}>
          {props.detail}
        </p>
      </div>
    </div>
  );
};

export const OtherUsers = (props) => {
  return (
    <div className="hidden md:block w-[20%] h-full bg-[var(--surface-dark)] p-5 m-2 rounded-lg">
      <Friends />
      <DiscoverNewFriends />
    </div>
  );
};

export const Friends = (props) => {
  return (
    <div className="w-full h-full my-5">
      <div className="mb-3 oldFriends">
        <h2 className="text-2xl text-center">Your Friends</h2>
      </div>
      <div className="mt-3 oldFriendsList">
        <FollowedFriends name="User 1" logo={LOGO2} />
        <FollowedFriends name="User 2" logo={LOGO3} />
        <FollowedFriends name="User 3" logo={LOGO4} />
        <FollowedFriends name="User 4" logo={LOGO5} />
      </div>
    </div>
  );
};

export const DiscoverNewFriends = (props) => {
  return (
    <div className="w-full h-full my-5">
      <div className="mb-3 oldFriends">
        <h2 className="text-2xl text-center">Find new Friends</h2>
      </div>
      <div className="mt-3 oldFriendsList">
        <AddNewUser name="User 1" logo={LOGO2} />
        <AddNewUser name="User 2" logo={LOGO3} />
        <AddNewUser name="User 3" logo={LOGO4} />
        <AddNewUser name="User 4" logo={LOGO5} />
      </div>
    </div>
  );
};

export const AddNewUser = (props) => {
  return (
    <div className="flex justify-between w-full h-full my-2">
      <NameContainer imgSize="40" name={props.name} logo={props.logo} />
      <div className="flex items-center text-[var(--secondary-dark)] followBtn cursor-pointer hover:text-[var(--secondary-light)] px-2">
        <span className="material-symbols-outlined">add</span>
      </div>
    </div>
  );
};

export const FollowedFriends = (props) => {
  return (
    <div className="flex justify-between w-full h-full my-2">
      <NameContainer imgSize="40" name={props.name} logo={props.logo} />
      <div className="flex items-center text-[var(--primary-dark)] followBtn cursor-pointer hover:text-[var(--primary-light)] px-2">
        <span className="material-symbols-outlined">done_all</span>
      </div>
    </div>
  );
};

export const SocialIcons = (props) => {
  return (
    <div className=" socialIconsContainer flex w-full mt-2 py-2 px-1 text-xl border-b border-[var(--border-dark)] gap-3 text-[var(--modal-dark)] justify-start items-center cursor-pointer">
      <i className={`fa-brands fa-${props.iconLogoName}`}></i>
      <div>
        <p>{props.iconName}</p>
      </div>
    </div>
  );
};

export const ProfilePicture = (props) => {
  return (
    <div
      onClick={() => navigate(`/profile/${props.userId}`)}
      className="overflow-hidden rounded-full"
      style={{ width: `${props.imgSize}px`, height: `${props.imgSize}px` }}
    >
      <img
        src={`http://localhost:3001/assets/${props.picturePath}`}
        style={{ width: `${props.imgSize}px`, height: `${props.imgSize}px` }}
        className="object-cover rounded-full"
      />
    </div>
  );
}
          
