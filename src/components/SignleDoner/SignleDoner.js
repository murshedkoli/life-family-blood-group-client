import React, { useEffect, useState } from 'react';
import {  Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Heder from '../Header/Heder';
import Countdown from '../Countdown';


const SignleDoner = () => {
    const { id } = useParams();

    const [doner, setDoner] = useState([]);


    // https://life-family-server.herokuapp.com

    useEffect(() => {
        fetch('https://life-family-server.herokuapp.com/singledoner?id=' + id)
            .then(res => res.json())
            .then(data => {

                setDoner(data);

            })
    }, [id])

    const donerDate = new Date(doner.lastDate);
    const today = new Date();
  
    const diffTime =  today.getTime()-donerDate.getTime();
    const diffDays = diffTime / (1000*3600*24);
    const days = Math.floor(diffDays) -90



    return (
        <div>
            <div style={{ backgroundColor: '#172b4d', minHeight: '100vh' }}> <Heder />
                <div className="container mt-5">
                    <Card className="text-center">
                        <Card.Header>Blood Group: {doner.blood}</Card.Header>
                        <Card.Body>
                            <Card.Title>{doner.name}</Card.Title>
                            <Card.Text>
                                Address : {doner.address}
                            </Card.Text>
                            {days >0 && <a href={`tel:${doner.phone}`} className="btn btn-outline-success">Call For Help</a>}
                        </Card.Body>
                        <Card.Footer className="text-muted"> <Countdown date={doner.lastDate} doner={doner} /> </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SignleDoner;