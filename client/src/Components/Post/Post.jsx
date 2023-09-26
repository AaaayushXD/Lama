import { useSelector, useDispatch } from "react-redux";
import { UpdatePost, UserPostContainer } from "./postComponents";
import { useEffect } from "react";
import { setPosts } from "../state";
// import dotenv from "dotenv";
// dotenv.config();
// const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

const BACKEND_URL =
  "https://lama-server-9kdt.onrender.com" || "http://localhost:3001";


export const PostsContainer = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch(`${BACKEND_URL}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `${BACKEND_URL}/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []);

  console.log(posts);
  return (
    <div className="min-w-[60%] m-2 p-4">
      {posts.map(
        ({
          _id,
          userId,
          fullName,
          description,
          address,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <UserPostContainer
            key={_id}
            postId={_id}
            postUserId={userId}
            fullName={fullName}
            description={description}
            address={address}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </div>
  );
};

export const MainContainer = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <div className="w-full md:w-[80%] lg:w-[60%]">
      <UpdatePost picturePath={picturePath} />
      <PostsContainer userId={_id} isProfile={false} />
    </div>
  );
};
