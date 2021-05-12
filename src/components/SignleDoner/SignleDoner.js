import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Heder from '../Header/Heder';
import Countdown from '../Countdown';
import swal from 'sweetalert';


const SignleDoner = () => {
    const { id } = useParams();

    const [doner, setDoner] = useState([]);



    const [user, setUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        setUser(user)
    }, [])

    document.title = `${doner.name} | Life Family Blood Donation Group`

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

    const diffTime = today.getTime() - donerDate.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    const days = Math.floor(diffDays) - 90


    const updateLastDate = uid => {

        const data = {
            today : new Date(),
            id:uid
        }

        fetch('http://localhost:5000/updateLastDate',
            {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
               if(data.modifiedCount){
                swal("স্বাগতম!", "আপনার রক্ত দানের তারিখ সফল ভাবে আপডেট হয়েছে", "success");
               }else{
                swal("দুঃখিত!", "আপনার সর্বশেষ রক্ত দানের তারিখটি আপডেট হয়নি!", "warning");
               }

            })
    }

    return (
        <div>
            <div style={{ backgroundColor: '#172b4d', minHeight: '100vh' }}>
                <div className="container mt-5">
                    <Card className="text-center">
                        <Card.Header>রক্তের গ্রুপ: {doner.blood}</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ textTransform: 'capitalize' }}>{doner.name}</Card.Title>
                            <Card.Text>
                                ঠিকানা : {doner.address} <br />
                                সর্বশেষ রক্ত দানের তারিখ : {doner.lastDate}
                            </Card.Text>
                            {days > 0 && user &&
                                <div>
                                    <a href={`tel:${doner.phone}`} className="btn btn-outline-success">এখনই কল করুন</a>
                                    <br />
                                    <br />
                                    <button onClick={() => updateLastDate(doner._id)} className="btn btn-danger"> আজকে রক্ত দান করেছেন</button>

                                </div>

                            }
                        </Card.Body>
                        <Card.Footer className="text-muted"> <Countdown date={doner.lastDate} doner={doner} /> </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SignleDoner;