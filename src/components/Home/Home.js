import React from 'react';
import './Home.css';
import Header from '../Header/Header';


const Home = () => {
  return (
    <div>
        <Header />
            <div className='home-container'>
                <h2>Welcome to My Art Portfolio</h2>
                <p>Explore amazing artwork from talented artists.</p>
            </div>
    </div>
  );
};

export default Home;
