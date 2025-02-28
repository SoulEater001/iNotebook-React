import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();
  const host = 'http://localhost:5000'
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api call.
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if(json.success){

      localStorage.setItem('token', json.authToken);
      navigate('/');
      props.showAlert("Signup successfully","success")
    }else{
      // alert(json.error)
      props.showAlert(json.error,"danger")
    }
  }

  return (
    <div className='container mt-2'>
      <h2>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
