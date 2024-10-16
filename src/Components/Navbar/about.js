import React from 'react';
import './home.css'; // Import your CSS file
import Navbar from './navbar';

const Home = () => {
  return (
    <>
   <Navbar/>
    <div className="home-container">
      <div>Hi, This is About Page</div>
    </div>
    </>
  );
};

export default Home;
