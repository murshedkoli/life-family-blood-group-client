import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const DonerList = () => {
    const [formData, setFormData] = useState('');

    const [doners, setDoners] = useState([]);
   

    useEffect(() => {
        fetch('https://life-family-server.herokuapp.com/doner?blood='+formData)
            .then(res => res.json())
            .then(data => {

                setDoners(data.reverse());

            })
    }, [formData])

    

    const handleOnBlur =e=>{
       
       setFormData(e.target.value);
 
    }


    return (
        <div>

            <div className="mb-3">
                <label htmlFor="blood" className="form-label">Select Blood Group</label>
                <select onChange={handleOnBlur} class="form-select" id="blood" name="blood" required>
                    <option value=" " selected>Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
            </div>
            {
                doners.map(doner => <div  class="card mt-3">
                    <div class="card-header">
                        Blood Group : {doner.blood}
                    </div>
                    <div class="row card-body d-flex">

                        <div className="col-md-6 col-sm-12" >
                            <h5 class="card-title">{doner.name}</h5>
                            <p class="card-text">Last Donate Date: {new Date(doner.lastDate).toDateString()}</p>
                        </div>
                        <a href={`tel:${doner.phone}`} className="btn btn-success col-md-6 col-sm-12">CALL <br /> <small>{doner.name}</small></a>

                    </div>
                </div>
                
                )
            }
        </div>
    );
};

export default DonerList;