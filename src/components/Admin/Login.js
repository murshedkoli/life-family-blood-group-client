import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Heder from '../Header/Heder';

const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/admin" } };


    const [formData, setFormData] = useState({});

    const handleBlur = e => {
        const newData = { ...formData };
        newData[e.target.name] = e.target.value;
        setFormData(newData)
    }

    const onSubmit = (e) => {
        if (formData.userName === "lifeFamily01" && formData.password === "aliAfzal") {

            const user = {name: 'afzal', role:'admin'}

            sessionStorage.setItem('user', JSON.stringify(user))
            history.replace(from);

        } else {
            alert('you are not admin')
        }
        e.preventDefault()
    }

    return (
        <div>
            <Heder />


            <div className="container d-flex justify-content-center align-item-center">
                <form style={{ marginTop: '100px' }} onSubmit={onSubmit}>
                    <div className="mb-3">
                        <input onBlur={handleBlur} type="text" className="form-control" name="userName" placeholder="username" />
                    </div>
                    <div className="mb-3">
                        <input onBlur={handleBlur} type="password" className="form-control" name="password" placeholder="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>

    );
};

export default Login;