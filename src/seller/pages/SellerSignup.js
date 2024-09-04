


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../pages/Login.css'; // Ensure this file exists and is correctly linked
import backgroundImage from '../pages/images/bg.jpg'; // Ensure the path is correct

const SellerSignup = () => {
  const [name, setName]= useState("");
  const [address, setAddress]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const navigate = useNavigate()
  const formData = {name, password, address, email};

    const submitForm = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            await axios.post("http://localhost:8000/api/sellers/sellerregister", formData);
            alert("Seller Registered successfully");
            navigate("/Dashboard");
        } catch (error) {
            alert("Something went wrong");
        }
    };

    return (
        <div
            className='text-center loginbody'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                height: '100vh', // Adjusted height
            }}
        >
            <div className="mx-auto rounded text-white login-container"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
                    height: '390px', // Set height
                    width: '890px', // Set width
                    margin: '120px', // Set margin
                }}
            >
                <h3 className="px-3 pt-3">Seller Registration Form</h3>
                <hr />
                <form className="px-3 py-1" onSubmit={submitForm}>
                    <div className="mb-3 ">
                        {/* <span className="input-group-text bg-warning border border-warning">
                            <i className="fas fa-user"></i>
                        </span> */}
                        <div className='row text-center' style={{margin:"20px"}}>
                        <div className='col-lg-6'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                           </div>
                           <div className='col-lg-6'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                           </div>
                       

                      
                        </div>
                        <div className='row text-center' style={{margin:"20px"}}>
                        <div className='col-lg-6'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                           </div>
                           <div className='col-lg-6'>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                           </div>
                       

                      
                        </div>   

                    </div>
                  
                    <button
                            onClick={submitForm}
                            className="btn btn-warning"
                            style={{ width: "100px" }}
                        >
                            Submit
                        </button>
                
                </form>
                <hr />
                <div className="text-center">
                   Already have an account to Click ? <Link to="/login1" className="text-decoration-none">Login</Link><br />
                    <Link to="/forgot-password" className="text-decoration-none">Forgot your password</Link>
                </div>
            </div>
        </div>
    );
};

export default SellerSignup;
