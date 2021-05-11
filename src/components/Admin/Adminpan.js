import React, { useEffect, useState } from 'react';
import DonerForHome from '../DonerList/DonerForHome';
import Heder from '../Header/Heder';
import loading from '../../photos/loading.svg'

const Adminpan = () => {


       
    document.title ="Admin Page | Life Family Blood Donation Group"
    const [formData, setFormData] = useState('');

    const [doners, setDoners] = useState([]);

    //http://localhost:5000
    //https://life-family-server.herokuapp.com
    useEffect(() => {
        fetch('http://localhost:5000/doner-search?name=' + formData)
            .then(res => res.json())
            .then(data => {

                setDoners(data.reverse());

            })
    }, [formData])



    const handleOnBlur = e => {

        setFormData(e.target.value);

    }

    return (
        <div>
            <Heder/>
            <div className="container">
                <input style={{width:'100%', padding:'10px', borderRadius:'10px'}} onChange={handleOnBlur} type="text" placeholder="দাতার নাম দিয়ে খুজুন" />
            </div>
            <div className="mt-3 container">

            {
                doners.length ? doners.map(doner => <DonerForHome doner={doner} />

                ) : <div style={{ display: 'flex', justifyContent: 'center' }}><img style={{ marginTop: '100px', }} src={loading} alt="loading img"></img></div>
            }
        </div>
        </div>
    );
};

export default Adminpan;