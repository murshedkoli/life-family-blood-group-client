import React from 'react';
import SingleInfoCard from './SingleInfoCard';

const CardBody = ({doners}) => {



    return (
        <div class="row">
        

        <SingleInfoCard heading={'নিবন্ধিত সদস্য'} number={doners.length} footer={"সর্বমোট নিবন্ধিত"}/>
        <SingleInfoCard heading={'রক্ত দানের সংখ্যা'} number={20} footer={"১ লা জানুয়ারী ২০২১ হতে"}/>
            
        </div>
    );
};

export default CardBody;