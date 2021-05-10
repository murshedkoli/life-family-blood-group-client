import React from 'react';
import SingleInfoCard from './SingleInfoCard';

const CardBody = ({doners}) => {



    return (
        <div class="row">
        

        <SingleInfoCard heading={'নিবন্ধিত সদস্য'} number={doners.length} footer={"সর্বমোট নিবন্ধিত"}/>
            
        </div>
    );
};

export default CardBody;