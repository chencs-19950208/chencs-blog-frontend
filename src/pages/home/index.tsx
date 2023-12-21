import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  const handleJump = () => {
    navigate('/personal');
  }

  return <div onClick={handleJump}>点击跳转personal</div>
};

export default Home;