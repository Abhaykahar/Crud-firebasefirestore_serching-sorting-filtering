import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ADD_USER } from './Redux/Action/LoginAction';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();

        let obj={
            id:Math.floor(Math.random()*10000),
            email,
            password,
            status: 'active',
        }

        dispatch(ADD_USER(obj));

        alert("Add user sucessfully...");
        navigate('/view')
        setEmail("");
        setPassword("");
    }
  return (
    <div>
        <div className="col-lg-6 mx-auto mt-5 border p-5">
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)} value={email}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e)=> setPassword(e.target.value)} value={password}  />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>

    </div>
  )
}

export default Login
