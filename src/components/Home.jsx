import Navbar from "./Navbar";
import React from 'react';
import PostList from './PostList';

const Home = () => {
  return (
    <div>
      <h2>Bienvenido</h2>
      <Navbar />
      <PostList />
    </div>
  );
};

export default Home;

