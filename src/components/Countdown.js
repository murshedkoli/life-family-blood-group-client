import React from 'react';

const Countdown = ({date, doner}) => {

  const {name}= doner;

  const donerDate = new Date(date);
  const today = new Date();

  const diffTime =  today.getTime()-donerDate.getTime();
  const diffDays = diffTime / (1000*3600*24);
  const days = Math.floor(diffDays) -90
  const available = 90- Math.floor(diffDays)


  return (
    days <0 ?<div style={{backgroundColor:'red', borderRadius:'5px', color:'white', fontWeight:'bold', padding:'10px'}}>{name} আরও {available} দিন পরে রক্ত দিতে পারবেন।</div>: <div style={{backgroundColor:'green', borderRadius:'5px', color:'white', fontWeight:'bold', padding:'10px'}}>{name} আজকে রক্ত দিতে পারবেন। </div>
  );
};

export default Countdown;