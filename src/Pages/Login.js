
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const formData = { email, password };
  const navigate = useNavigate()
  const submitForm = async () => {
    try {

      await axios.post("http://localhost:8000/api/buyers/login", formData);
      alert("Buyer login successfully")
      navigate("/ ")
    } catch (error) {
      alert("Something went wrong")
    }
  }



  return (
    <><br /><br />

      <div className='container '>
        
        <h3 className='text-center ' >Login</h3>
        <br />

        <div className='row '>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 left-col shadow p-3 mb-5 bg-white rounded'>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10 ">
                  <input className="form-control" id="inputEmail3" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="row mb-3 ">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>

                <div className="col-sm-10 ">
                  <input type="password" className="form-control" id="inputPassword3" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p className='text-center'>Click here to <Link to="/Signup">Signup</Link>  if you dont have User ID</p>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">

                </div>
              </div>
              <div className='text-center'>
                <button onClick={submitForm}
                  className="btn btn-outline-success"
                  style={{ background: "#063970", color: "white", width: "90px" }}>Login</button>
              </div>
            </form>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 right-col'>
            <img src="./images/R.png" style={{ width: "450px" }} alt="Background" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login