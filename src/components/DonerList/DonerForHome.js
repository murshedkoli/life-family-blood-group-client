import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Countdown from '../Countdown';

const DonerForHome = ({doner}) => {


    const donerDate = new Date(doner.lastDate);
    const today = new Date();
  
    const diffTime =  today.getTime()-donerDate.getTime();
    const diffDays = diffTime / (1000*3600*24);
    const days = Math.floor(diffDays) -90
    const available = 90- Math.floor(diffDays)



    return (
        <div>
            <div class="card mt-3">
                    <div class="card-header">
                        Blood Group : {doner.blood}
                    </div>
                    <div class="row card-body d-flex">

                        <div className="col-md-6 col-sm-12" >
                            <Link to={`singleDoner/${doner._id}`}><h5 class="card-title">{doner.name}</h5></Link>
                            <p class="card-text">Last Donate Date: {new Date(doner.lastDate).toDateString()}</p>
                        </div>
                       {
                           days<0 ? <a  href="/" className="btn btn-danger col-md-6">Not Available Now </a>: <a href={`tel:${doner.phone}`} className="btn btn-success col-md-6 col-sm-12">Call <br /> <small>{doner.name}</small></a>
                       }
                    </div>
                    <Card.Footer className="text-muted"> <Countdown date={doner.lastDate} doner={doner} /> </Card.Footer>
                </div>
        </div>
    );
};

export default DonerForHome;