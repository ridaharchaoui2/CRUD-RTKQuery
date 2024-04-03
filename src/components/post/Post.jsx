import React from "react";
import Loader from "../Loader/Loader";
import {
  useDeletePostMutation,
  useGetPostQuery,
} from "../../app/services/postApi";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading, isError, error } = useGetPostQuery(id);
  const [
    deletePost,
    { isLoading: deleteIsLoading, isError: deleteIsError, error: deleteError },
  ] = useDeletePostMutation();
  if (isLoading || deleteIsLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>{error}</strong>
      </div>
    );
  }
  if (deleteIsError) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>{deleteError}</strong>
      </div>
    );
  }
  return (
    <>
      <h1>{post.title}</h1>{" "}
      <button
        onClick={() => {
          deletePost(post.id);
          navigate("/");
        }}
        className="btn btn-danger btn-sm"
      >
        X
      </button>
      <div>{post.content}</div>
      <div>{post.date}</div>
    </>
  );
};

export default Post;
