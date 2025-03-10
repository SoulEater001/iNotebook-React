import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
const [credentials, setCredentials] = useState({email:"", password:""})
let navigate= useNavigate();
    const host = 'http://localhost:5000'

    const handleSubmit = async (e) => {
        e.preventDefault();
            // api call
            const response = await fetch(`${host}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email:credentials.email, password:credentials.password })
            });
            const json = await response.json();
            console.log(json);
            if(json.success){
                //save auth-token and redirect
                localStorage.setItem('token', json.authToken);
                navigate('/');
                props.showAlert("Logged in successfully","success")
            }
            else{
                props.showAlert(json.error,"danger")
            }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
