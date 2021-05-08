import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router';



const Form = () => {
    const history = useHistory();


    const [startDate, setStartDate] = useState(new Date());
   

    const [formData, setFormData] = useState({});
    

    const handleOnBlur =e=>{
       const newData = {...formData};
       newData[e.target.name]= e.target.value;
       setFormData(newData);
    }



    const formOnSubmit = e =>{
        const formDataForSubmit ={
            name:formData.name,
            address:formData.address,
            phone:formData.phone,
            blood:formData.blood,
            lastDate:startDate

        }

        fetch('https://life-family-server.herokuapp.com/adddoner',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataForSubmit)

        })
        .then(res => res.json())
        .then(data=> {
            if(data>0){
                alert('Your Registration Succefully Complete')
                history.push('/')

            }else{
                alert('Your Registration Unsuccessfull')
                
            }
        })

        e.preventDefault()
    }



    return (
        <div className="container">
            <h5 style={{ textAlign: 'center' }}>Doner Registration Page</h5>
            <form onSubmit={formOnSubmit}>
                <div className="mb-3">
                    <input onBlur={handleOnBlur} type="text" className="form-control" id="name" name="name" placeholder="Full Name of Doner" required />
                </div>
                <div className="mb-3">
                    <input onBlur={handleOnBlur} type="text" className="form-control" id="address" name="address" placeholder="Address: Kalikaccha, Sarail, Brahmanbaria" required />
                </div>
                <div className="mb-3">
                    <input onBlur={handleOnBlur} type="number" className="form-control" id="phone" name="phone" placeholder="Phone Number: 017819814...." required />
                </div>
                <div className="mb-3">
                    <select onBlur={handleOnBlur} class="form-select" id="blood" name="blood" required>
                        <option selected>Select Your Blood Group</option>
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

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Your Last Donate Date</label> <br />
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

                </div>
                {/* <div class="d-grid gap-2">
                    <button  class="btn btn-primary" type="button">Submit</button>
                  
                </div> */}
                <input className="btn btn-success" style={{width:'100%',}} type="submit" value="Submit"/>

            </form>
        </div>

    );
};

export default Form;