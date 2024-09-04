import React, { useEffect, useState } from 'react'
import '../Pages/Login.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
const [title, setTitle] = useState();
const [desc,  setDesc] = useState();
const [price, setPrice] = useState();
const [img, setImg] = useState();

    const buyerToken = localStorage.getItem("buyerToken")
    useEffect(()=>{
        if(!buyerToken){
            navigate("/login1")
        }
    })
  return (
    <div className='text-center page-bg' style={{marginTop:"130px"}} ><h3>Welcome to Home Page</h3><hr/></div>


  )
}

export default Home