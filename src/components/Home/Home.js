import React from 'react';
import DonerList from '../DonerList/DonerList';


import ParticlesBg from 'particles-bg'


const Home = () => {
    return (
        <div >

            <div className="container">

                <DonerList />
                <ParticlesBg color="#ff0000" num={200} type="cobweb" bg={true} />

            </div>
        </div>
    );
};

export default Home;