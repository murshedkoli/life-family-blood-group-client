import React from 'react';
import DonerList from '../DonerList/DonerList';
import Heder from '../Header/Heder';

const Home = () => {
    return (
        <div > <Heder />
            <div className="container">
             
                <DonerList />
            </div>
        </div>
    );
};

export default Home;