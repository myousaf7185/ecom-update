import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Product = () => {
  const Navigate = useNavigate();
const [title, setTitle]= useState();
const [desc, setDesc]= useState();
const [price, setPrice]= useState();
const [img, setImg]= useState();
const sellerToken = localStorage.getItem("sellerToken");

useEffect(()=>{
  if(!sellerToken){
      Navigate("/sellerlogin")
  }
})

const formData = {title, desc, price, img};
const submitForm =async ()=>{
    
    try {
        await axios.post('http://localhost:8000/api/product/addproduct', formData);
        alert("data save Successfully");
        
    } catch (error) {
        alert('fill up Form',error)
    }
} 


  return (
<>
<div className='container' style={{marginTop:"180px"}}>
    <h1 className='text-center'>Add Products</h1><br/><br/> 
    <form className="row g-3" onSubmit={submitForm} >

    <div className="col-md-6">
      <label for="inputEmail4" className="form-label">Title</label>
      <input type="text" className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)}/>
    </div>                                                  
    <div className="col-md-6">
      <label for="inputPassword4" className="form-label">Description</label>
      <input type="text" className="form-control" value={desc} onChange={(e)=> setDesc(e.target.value)} />
    </div>
    <div className="col-12">
      <label for="inputAddress" className="form-label">Price</label>
      <input type="text" className="form-control"  value={price} onChange={(e)=> setPrice(e.target.value)} />
    </div>
    <div className="col-12">
      <label for="inputAddress2" className="form-label">img</label>
      <input type="text" className="form-control" value={img} onChange={(e)=> setImg(e.target.value)} />
    </div>
    
  
    <div className="col-12">
      <button type="submit"  onClick={submitForm} className="btn btn-success">Save</button>
    </div>
  </form>
  
  </div>
  </>
  )
}

export default Product