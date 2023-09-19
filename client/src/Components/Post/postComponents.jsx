import { NameContainer } from "../Home/homeComponents";
import LOGO1 from "../../assets/avatar/avatar1.png";
import LOGO2 from "../../assets/avatar/avatar2.png";
import LOGO3 from "../../assets/avatar/avatar3.png";
import LOGO4 from "../../assets/avatar/avatar4.png";
import LOGO5 from "../../assets/avatar/avatar5.png";
import NETFLIXIMAGE from "../../assets/netflix.png"; 
import ANOTHERIMG from "../../assets/longImg.png"

export const UpdatePost = () => {
  return (
    <div className="mt-6 pb-4 sendPost min-w-[60%] justify-center items-center border-b border-[var(--surface-dark)]">
      <UpdatePostInputField placeholder="Whats on your mind ..." />
      <PostIcons />
    </div>
  );
};

export const UpdatePostInputField = (props) => {
  return (
    <div className="flex items-center justify-between gap-3 mb-2 inputText">
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-full p-3 rounded-full bg-[var(--surface-dark)]"
      />
      <span className="text-3xl material-symbols-outlined">send</span>
    </div>
  );
};

export const PostIcons = () => {
  return (
    <div className="flex items-center justify-around my-4 inputIcons">
      <span className="w-full p-2 rounded-lg text-2xl text-center material-symbols-outlined hover:bg-[var(--modal-dark)] cursor-pointer">
        add_a_photo
      </span>
      <span className="w-full p-2 text-2xl text-center rounded-lg material-symbols-outlined hover:bg-[var(--modal-dark)] cursor-pointer">
        image
      </span>
      <span className="w-full p-2 text-2xl text-center rounded-lg material-symbols-outlined hover:bg-[var(--modal-dark)] cursor-pointer">
        attach_file
      </span>
      <span className="w-full p-2 text-2xl text-center rounded-lg material-symbols-outlined hover:bg-[var(--modal-dark)] cursor-pointer">
        location_on
      </span>
    </div>
  );
};

export const UserPost = (props) => {
  return (
    <div className="pb-3 my-5 border-b-2 border-[var(--surface-dark)] postContainter">
     <UserPostContainer />
    </div>
  );
};

export const UserPostContainer = () => {
    return (
      <div className="mx-8 mt-5 mb-1">
        <UserPostDetail name="Aayush Lamichhane" logo={LOGO5} />
        <UserPostContent />
        <PostReaction />
        <UpdatePostInputField placeholder="Add a comment." />
      </div>
    );
}

export const UserPostDetail = (props) => {
  return (
    <div className="flex items-center justify-between w-full py-1 userDetail">
      <NameContainer name={props.name} logo={props.logo} imgSize="50" />
      <div className="action">
        <span className="material-symbols-outlined">more_vert</span>
      </div>
    </div>
  );
};
export const UserPostContent = (props) => {
    return (
      <div className="object-scale-down object-center w-full px-4 overflow-hidden rounded-lg mainPost">
        <p className="py-2 caption text-l">This is a caption</p>
        <img src={NETFLIXIMAGE} className="object-scale-down object-center" />
      </div>
    );
}

export const PostReaction = () => {
    return (
      <div className="flex items-center justify-between w-full pt-3 pb-2 m-2 reaction">
        <div className="postReaction">
          <span className="ml-2 mr-5 text-3xl cursor-pointer material-symbols-outlined">
            favorite
          </span>
          <span className="mx-3 text-3xl cursor-pointer material-symbols-outlined">
            mode_comment
          </span>
          <span className="ml-5 mr-2 text-3xl cursor-pointer material-symbols-outlined">
            share
          </span>
        </div>
        <div className="saveAsFav">
          <span className="mr-5 text-3xl cursor-pointer material-symbols-outlined">
            bookmark
          </span>
        </div>
      </div>
    );
}