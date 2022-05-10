import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;