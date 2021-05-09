import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardBody from '../CardBody';
import loading from '../../photos/loading.gif'

const DonerList = () => {
    const [formData, setFormData] = useState('');

    const [doners, setDoners] = useState([]);
   
//http://localhost:5000
//https://life-family-server.herokuapp.com
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
        <div className="mt-3">
               <CardBody doners={doners} formData={formData}/>

            <div className="mt-3">
                <select onChange={handleOnBlur} class="form-select" id="blood" name="blood" required>
                    <option value=" " selected>Search with blood group</option>
                    <option value="A%2B">A+</option>
                    <option value="A-">A-</option>
                    <option value="B%2B">B+</option>
                    <option value="B%2B">B-</option>
                    <option value="O%2B">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB%2B">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
            </div>
            {
               doners.length? doners.map(doner => <div  class="card mt-3">
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
           
           ): <div style={{display:'flex',justifyContent:'center', }}><img style={{marginTop:'100px', }} src={loading} alt="loading img"></img></div>
            }
        </div>
    );
};

export default DonerList;