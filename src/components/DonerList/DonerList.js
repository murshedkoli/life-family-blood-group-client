import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardBody from '../CardBody';
import loading from '../../photos/loading.gif'
import DonerForHome from './DonerForHome';

const DonerList = () => {

    
    document.title ="Home Page | Life Family Blood Donation Group"
    const [formData, setFormData] = useState('');

    const [doners, setDoners] = useState([]);

    //http://localhost:5000
    //https://life-family-server.herokuapp.com
    useEffect(() => {
        fetch('https://life-family-server.herokuapp.com/doner?blood=' + formData)
            .then(res => res.json())
            .then(data => {

                setDoners(data.reverse());

            })
    }, [formData])



    const handleOnBlur = e => {

        setFormData(e.target.value);

    }




    return (
        <div className="mt-3">
            <CardBody doners={doners} />

            <div className="mt-3">
                <select onChange={handleOnBlur} class="form-select" id="blood" name="blood" required>
                    <option value=" " selected> রক্তের গ্রুপ দিয়ে খুজুন </option>
                    <option value="A%2B">A+</option>
                    <option value="A-">A-</option>
                    <option value="B%2B">B+</option>
                    <option value="B-">B-</option>
                    <option value="O%2B">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB%2B">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
            </div>
            {
                doners.length ? doners.map(doner => <DonerForHome doner={doner} />

                ) : <div style={{ display: 'flex', justifyContent: 'center' }}><img style={{ marginTop: '100px', }} src={loading} alt="loading img"></img></div>
            }
        </div>
    );
};

export default DonerList;