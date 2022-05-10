import React from 'react';
import Banner from './Banner';
import Info from './Info';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Banner></Banner>
            <Info></Info>
        </div>
    );
};

export default Home;