import { UpdatePost, UserPost } from "./postComponents";


export const MainContainer = (props) => {
  return (
    <div className="w-[60%]">
      <UpdatePost />
      <PostsContainer />
    </div>
  );
};


export const PostsContainer = (props) => {
    return (
      <div className="min-w-[60%] m-2 p-4">
            <UserPost />
            <UserPost />
      </div>
    );
}