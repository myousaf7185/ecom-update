
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../pages/Login.css'; // Ensure this file exists and is correctly linked
import backgroundImage from '../pages/images/bg.jpg'; // Ensure the path is correct

const SellerLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formData = { email, password };
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/sellers/sellerlogin", formData);
            alert("Seller login successfully");
            const token = response.data.token
            localStorage.setItem("sellerToken", token);
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
                    width: '390px', // Set width
                    margin: '120px', // Set margin
                }}
            >
                <h3 className="px-3 pt-3">Seller Login</h3>
                <hr />
                <form className="px-3 py-1" onSubmit={submitForm}>
                    <div className="mb-3 input-group">
                        <span className="input-group-text bg-warning border border-warning">
                            <i className="fas fa-user"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="User Name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text bg-warning border border-warning">
                            <i className="fas fa-lock"></i>
                        </span>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            name="remember"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember Me
                        </label>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button
                            type="submit"
                            className="btn btn-warning"
                            style={{ width: "100px" }}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <hr />
                <div className="text-center">
                    Don't have an account? <Link to="/SellerSignup" className="text-decoration-none">Register</Link><br />
                    <Link to="/forgot-password" className="text-decoration-none">Forgot your password</Link>
                </div>
            </div>
        </div>
    );
};

export default SellerLogin;
