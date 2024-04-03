import React from "react";
import PostList from "./PostList";
import { Route, Routes } from "react-router-dom";
import Post from "./Post";
import AddPost from "./AddPost";

const PostManager = () => {
  return (
    <>
      <div className="d-flex bd-highlight justify-conten align-items-center">
        <div className="p-2 flex-shrink-1 bd-highlight">
          <PostList />
        </div>
        <div className="p-2 w-100 bd-highlight">
          <Routes>
            <Route path="/posts/:id" element={<Post />} />
            <Route path="*" element={<h6>Please choose a post</h6>} />
          </Routes>
        </div>
      </div>
      <hr />
      <div className="container w-50 my-5">
        <h1>Add post</h1>
        <AddPost />
      </div>
    </>
  );
};

export default PostManager;
