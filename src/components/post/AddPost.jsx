import React from "react";
import Loader from "../Loader/Loader";
import { useAddPostMutation } from "../../app/services/postApi";

const AddPost = () => {
  const [addPost, { isLoading, isError, error }] = useAddPostMutation();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>{error}</strong>
      </div>
    );
  }
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    addPost({
      title: formData.get("title"),
      content: formData.get("content"),
      date: new Date(),
    });
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" className="form-control" />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea name="content" className="form-control"></textarea>
        </div>
        <button className="btn btn-primary mt-3">Add post</button>
      </form>
    </>
  );
};

export default AddPost;
