import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
const [name, setName]= useState("");
const [address, setAddress]= useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const navigate = useNavigate()
const formData = {name, password, address, email};

const submitForm=  async ()=>{
  try {

            await axios.post("http://localhost:8000/api/buyers/register",formData);
            alert("Buyer Registered successfully")
            navigate("/Login")
  } catch (error) {
    alert("Something went wrong")
  }
}
  return (
    <>
<br/><br/>
    <div className='container'>
      <h3 className='text-center ' >Registration Form</h3>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input  class="form-control" id="inputEmail4" value = {name} onChange={(e) => setName(e.target.value)} />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" value = {password} onChange={(e) => setPassword(e.target.value)} />
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Address"value = {address} onChange={(e) => setAddress(e.target.value)} />
  </div>
  <div class="col-6">
    <label for="inputAddress2" class="form-label">Email</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="YYY@gmail.com" value = {email} onChange={(e) => setEmail(e.target.value)} />
  </div>
  
  <div class="col-12">
  <p className=''>Click here to <Link to ="/Login">Login</Link>  if you have Login ID</p> 
     
  </div>
  <div class="col-12">
  <button onClick={submitForm} class="btn" style={{background : "#093d91", color : "white", width : "140px"}}>Signup</button>
  </div>
</form>  
</div>
</>
  );
}

export default Signup;
