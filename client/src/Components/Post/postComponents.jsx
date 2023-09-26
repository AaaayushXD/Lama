import { NameContainer, ProfilePicture } from "../Home/homeComponents";
import { useSelector, useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { setPosts } from "../state";
import { setFriends } from "../state";
import { useNavigate } from "react-router-dom";
import { setPost } from "../state";
// import dotenv from "dotenv";
// dotenv.config();
// const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";


const BACKEND_URL =
  "https://lama-server-9kdt.onrender.com" || "http://localhost:3001";

export const UpdatePost = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`${BACKEND_URL}/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <div className="mt-6 mx-4 pb-4 sendPost min-w-[60%] justify-center items-center border-b border-[var(--surface-dark)]">
      <div className="flex items-center justify-center w-full h-full gap-5">
        <ProfilePicture imgSize="50" picturePath={picturePath} />
        <UpdatePostInputField
          placeholder="What's on your mind..."
          change={(e) => setPost(e.target.value)}
          value={post}
          buttonClick={handlePost}
          buttonDisable={!post}
        />
      </div>
      {isImage && (
        <div className="m-4 p-2 h-[80px] border border-dashed border-[var(--primary-dark)] hover:border-double flex justify-center items-center cursor-pointer">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="w-full text-center">
                <input {...getInputProps()} />
                {!image ? (
                  <p className="w-full p-4 border border-dashed border-[var(--primary-dark)] hover:border-double">
                    Add Image
                  </p>
                ) : (
                  <div className="flex items-center justify-between gap-4">
                    {image.name}
                    <span className="material-symbols-outlined">edit</span>
                  </div>
                )}
              </div>
            )}
          </Dropzone>
        </div>
      )}
      <PostIcons click={() => setIsImage(!isImage)} />
    </div>
  );
};

export const UpdatePostInputField = (props) => {
  return (
    <div className="flex items-center justify-between w-full gap-3 mb-2 inputText">
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-full p-3 rounded-full bg-[var(--surface-dark)] outline-none"
        value={props.value}
        onChange={props.change}
      />
      <button onClick={props.buttonClick} disabled={props.buttonDisable}>
        <span className="text-3xl material-symbols-outlined">send</span>
      </button>
    </div>
  );
};

export const PostIcons = (props) => {
  return (
    <div className="flex items-center justify-around my-4 inputIcons">
      <span className="w-full p-2 rounded-lg text-2xl text-center material-symbols-outlined hover:bg-[var(--modal-dark)] cursor-pointer">
        add_a_photo
      </span>
      <span
        className="w-full p-2 text-2xl text-center rounded-lg material-symbols-outlined hover:bg-[var(--modal-dark)] cursor-pointer"
        onClick={props.click}
      >
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

export const UserPostContainer = ({
  postId,
  postUserId,
  fullName,
  description,
  address,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComment, setIsComment] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = likes[loggedInUserId];
  const likeCount = Object.keys(likes).length;
  const patchLike = async () => {
    const response = await fetch(`${BACKEND_URL}/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatePost = await response.json();
    dispatch(setPost({ post: updatePost }));
  };

  return (
    <div className="pb-3 my-5 border-b-2 border-[var(--surface-dark)] postContainter">
      <div className="mx-8 mt-5 mb-1">
        <UserFriend
          friendId={postUserId}
          name={fullName}
          userPicturePath={userPicturePath}
        />
        <UserPostContent caption={description} picturePath={picturePath} />
        <PostReaction
          isLiked={isLiked}
          likeClicked={patchLike}
          likeCount={likeCount}
          commentCliked={() => setIsComment(!isComment)}
          commentLength={comments ? comments.length : 0}
        />
        {isComment && (
          <div className="my-3 h-40px text-l">
            {comments.map((comment, i) => (
              <div key={`${fullName}-${i}`}>
                <p className="my-1 p-2 bg-[var(--surface-dark)] rounded-lg">
                  {comment}
                </p>
              </div>
            ))}
          </div>
        )}
        <UpdatePostInputField placeholder="Add a comment." />
      </div>
    </div>
  );
};

export const UserFriend = (props) => {
  const {friendId, name, userPicturePath} = props
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  
  if (!friends) return;
  const isFriend = friends.find((friend) => friend._id === friendId);
  const patchFriend = async () => {
    const response = await fetch(
      `${BACKEND_URL}/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return (
    <div className="flex items-center justify-between w-full py-1 userDetail">
      <NameContainer
        name={name}
        logo={userPicturePath}
        imgSize="50"
        click={() => {
          navigate(`/profile/${friendId}`);
          navigate(0);
        }}
      />
      <div className="action">
        {friendId === _id ? (
          <div>
            <span className="material-symbols-outlined cursor-pointer hover:text-[var(--modal-dark)]">
              more_vert
            </span>
          </div>
        ) : (
          <div onClick={() => patchFriend()}>
            {isFriend ? (
              <span className="cursor-pointer material-symbols-outlined hover:text-[var(--secondary-dark)]">
                person_remove
              </span>
            ) : (
              <span className="cursor-pointer material-symbols-outlined hover:text-[var(--primary-dark)]">
                person_add
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const UserPostContent = (props) => {
  return (
    <div className="object-scale-down object-center w-full px-4 overflow-hidden rounded-lg mainPost">
      <p className="py-2 caption text-l">{props.caption}</p>
      {props.picturePath && (
        <img
          src={`${BACKEND_URL}/assets/${props.picturePath}`}
          className="object-scale-down object-center w-full"
        />
      )}
    </div>
  );
};

export const PostReaction = (props) => {
  const [bookMark, setBookMark] = useState(false);
  return (
    <div className="flex items-center justify-between w-full pt-3 pb-2 m-2 reaction">
      <div className="flex postReaction">
        <div
          onClick={props.likeClicked}
          className="flex items-center justify-center cursor-pointer"
        >
          {props.isLiked ? (
            <i className="mx-2 text-3xl cursor-pointer  fa-solid fa-heart text-[var(--secondary-dark)]"></i>
          ) : (
            <i className="mx-2 text-3xl cursor-pointer fa-regular fa-heart"></i>
          )}
          <p className="pr-1 mr-2">{props.likeCount}</p>
        </div>
        <div
          onClick={props.commentCliked}
          className="flex items-center justify-center cursor-pointer"
        >
          <span className="mx-2 text-3xl cursor-pointer material-symbols-outlined">
            mode_comment
          </span>
          <p>{props.commentLength}</p>
        </div>

        <span className="mx-3 text-3xl cursor-pointer material-symbols-outlined">
          share
        </span>
      </div>
      <div className="saveAsFav" onClick={() => setBookMark(!bookMark)}>
        {bookMark ? (
          <i className="mr-5 text-3xl cursor-pointer fa-solid fa-bookmark text-[var(--primary-dark)]"></i>
        ) : (
          <i className="mr-5 text-3xl cursor-pointer fa-regular fa-bookmark"></i>
        )}
      </div>
    </div>
  );
};
