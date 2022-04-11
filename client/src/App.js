import React from 'react';
import Signup from "./components/Signup/Signup.js";
import Login from "./components/Login/Login.js";
import Home from "./components/Home/Home.js";
import Blog from "./components/Blog/Blog.js";
import Search from "./components/Search/Search.js";
import Profile from "./components/Profile/Profile.js";
import EditPost from "./components/EditPost/EditPost.js";
import CreatePost from "./components/CreatePost/CreatePost.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/new" element={<CreatePost />}/>
          <Route exact path="/edit/:id" element={<EditPost />}/>
          <Route exact path="/search/:query" element={<Search />}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/blog/:id" element={<Blog />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
