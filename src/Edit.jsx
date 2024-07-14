import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {  EDIT_USER } from './Redux/Action/LoginAction';
import { useLocation, useNavigate } from 'react-router-dom';

function Edit() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch = useDispatch();

    const location=useLocation();
    console.log(location);

    useEffect(()=>{
        setEmail(location.state.email)
        setPassword(location.state.password)
    },[location.state])

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();

        let obj={
            id:location.state.id,
            email,
            password,
        }

        dispatch(EDIT_USER(obj));

        alert("Upate user sucessfully...");
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

export default Edit
