import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Dashboard = () => {

  const navigate = useNavigate()

    const buyerToken = localStorage.getItem("sellerToken")
    useEffect(()=>{
        if(!buyerToken){
            navigate("/SellerLogin")
        }
    })

    
  return (
    <div className='text-center' style={{marginTop:"130px"}} ><h3>Welcome to Dashboard</h3></div>

  )
}

export default Dashboard