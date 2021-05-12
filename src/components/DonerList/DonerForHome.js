import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Countdown from '../Countdown';

const DonerForHome = ({doner}) => {


    const donerDate = new Date(doner.lastDate);
    const today = new Date();
  
    const diffTime =  today.getTime()-donerDate.getTime();
    const diffDays = diffTime / (1000*3600*24);
    const days = Math.floor(diffDays) -90


    const [user, setUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        setUser(user)
    }, [])

    return (
        <div>
            <div class="card mt-3">
                    <div class="card-header">
                        রক্তের গ্রুপ : {doner.blood}
                    </div>
                    <div class="row card-body d-flex">

                        <div className="col-md-6 col-sm-12" >
                            <Link style={{color:'black', fontWeight:'bold', textDecoration:'none'}}  to={`singleDoner/${doner._id}`}><h5 style={{textTransform:'capitalize'}} class="card-title">{doner.name}</h5></Link>
                            <p class="card-text"> সর্বশেষ রক্ত দিয়েছেন : {new Date(doner.lastDate).toDateString()}</p>
                        </div>
                       {
                           days<0 ? <a  href="/" className="btn btn-danger col-md-6"> এখনো সময় হয়নি </a>: user && <a href={`tel:${doner.phone}`} className="btn btn-success col-md-6 col-sm-12"> <small>{doner.name} কে</small><br /> কল করুন </a>
                       }
                    </div>
                    <Card.Footer className="text-muted"> <Countdown date={doner.lastDate} doner={doner} /> </Card.Footer>
                    
                </div>
        </div>
    );
};

export default DonerForHome;