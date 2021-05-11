import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router';
import swal from 'sweetalert';



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
            if(data.insertedCount>0){
                
                swal("Congratulations!", "You are Successfully Registered!", "success");
                history.push('/')

            }else{
                swal("Ohhh!", "You are already registered!", "warning");
                
            }
        })

        e.preventDefault()
    }



    return (
        <div className="container">
            <h5 style={{ textAlign: 'center', color:'white',fontSize:'30px' }}>দাতা নিবন্ধন ফরম</h5>
            <form onSubmit={formOnSubmit}>
                <div className="mb-3">
                    <input onBlur={handleOnBlur} type="text" className="form-control" id="name" name="name" placeholder="সম্পূর্ণ নাম লিখুন" required />
                </div>
                <div className="mb-3">
                    <input onBlur={handleOnBlur} type="text" className="form-control" id="address" name="address" placeholder="ঠিকানা লিখুন, উদাহরণ: কালিকচ্ছ, সরাইল, ব্রাহ্মণবাড়িয়া" required />
                </div>
                <div className="mb-3">
                    <input onBlur={handleOnBlur} type="number" className="form-control" id="phone" name="phone" placeholder="মোবাইল নাম্বার লিখুন (ইংরেজিতে): 017819814...." required />
                </div>
                <div className="mb-3">
                    <select onBlur={handleOnBlur} class="form-select" id="blood" name="blood" required>
                        <option selected> আপনার রক্তের গ্রুপ সিলেক্ট করুন</option>
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
                    <label style={{color:'white'}} htmlFor="formGroupExampleInput2" className="form-label"> সর্বশেষ কবে রক্ত দিয়েছেন?</label> <br />
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

                </div>
                {/* <div class="d-grid gap-2">
                    <button  class="btn btn-primary" type="button">Submit</button>
                  
                </div> */}
                <input className="btn btn-success" style={{width:'100%', fontSize:'30px'}} type="submit" value="সাবমিট করুন"/>

            </form>
        </div>

    );
};

export default Form;