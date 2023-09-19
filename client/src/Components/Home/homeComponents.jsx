import "../../index.css";
import LOGO1 from "../../assets/avatar/avatar1.png";
import LOGO2 from "../../assets/avatar/avatar2.png";
import LOGO3 from "../../assets/avatar/avatar3.png";
import LOGO4 from "../../assets/avatar/avatar4.png";
import LOGO5 from "../../assets/avatar/avatar5.png";

export const NameContainer = (props) => {
  return (
    <div className="w-full h-full nameContainer">
      <div className="flex items-center w-full h-full nameContent">
        <img
          src={props.logo}
          style={{ width: `${props.imgSize}px`, height: `${props.imgSize}px` }}
          className="mx-3 my-1"
        />
        <p className="text-xl"> {props.name}</p>
      </div>
    </div>
  );
};

export const UserInfo = (props) => {
  return (
    <div className="p-4 m-2 infoContainer h-full w-[20%] bg-[var(--surface-dark)] rounded-lg">
      <div className="mainUser">
        <NameContainer name="Aayush Lamichhane" imgSize="50" logo={LOGO1} />
      </div>
      <div className="userAccInfo text-xl text-[var(--bgText-dark)] flex flex-col w-full mt-4 justify-center items-center">
        <InfoDetail detail="Texas College of Management & IT" />
        <InfoDetail detail="MERN developer" />
        <InfoDetail detail="Kathmandu, Nepal" />
        <InfoDetail detail="+977 - 9813425299" />
        <InfoDetail detail="aayushlamichhane2911 @gmail.com" />
      </div>
    </div>
  );
};

export const InfoDetail = (props) => {
  return (
    <div className="flex flex-col w-full mt-4 text-xl border-b border-[var(--border-dark)] userAccInfo">
      <div className="pl-2 mb-2">
        <p>{props.detail}</p>
      </div>
    </div>
  );
};

export const OtherUsers = (props) => {
  return (
    <div className="w-[20%] h-full bg-[var(--surface-dark)] p-5 m-2 rounded-lg">
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

