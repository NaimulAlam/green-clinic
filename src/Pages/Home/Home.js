import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';

const Home = () => {
  return (
    <div className="bg-home-background">
      <Banner />
      <Info />
    </div>
  );
};

export default Home;