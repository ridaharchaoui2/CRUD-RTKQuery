import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostList from "./components/post/PostList";
import { Route, Routes } from "react-router-dom";
import PostManager from "./components/post/PostManager";

function App() {
  return (
    <>
      <Routes>
        <Route path={"*"} element={<PostManager />} />
      </Routes>
    </>
  );
}

export default App;
