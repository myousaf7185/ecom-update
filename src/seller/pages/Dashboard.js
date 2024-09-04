

// import React, { useState, useEffect } from 'react';
// import { json, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import product from '../../../../backend/model/seller/productmodel';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const buyerToken = localStorage.getItem("sellerToken");

//   useEffect(() => {
//     if (!buyerToken) {
//       navigate("/SellerLogin");
//     }
//   }, [buyerToken, navigate]);

//   const [Products, setProducts] = useState([]);
//   const [cart, setCart]= useState([]);//creating empety state for ad to cart button

//   const getAllProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/api/product/get-all");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       // Optionally, handle the error by setting some error state or showing a message
//     }
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);
// //add to cart button  function 
//   const addToCart =(product)=>{
//   const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
//   const newcart=[...updatedCart, product];
//   localStorage.setItem("cart", JSON.stringify(newcart));
//   setCart=(cart)
//   }
//   return (
//     <>
//       <div className='text-center' style={{ marginTop: "130px" }}>
//         <h3>Welcome to Dashboard</h3><hr/>
//       </div>
//       <div className="container" style={{margin:"20px"}}>
//         <div className="row text-center">
//           {
//           Products.map((product) => (
//             <div className="col-lg-3 col-md-6 col-sm-12" key={product._id}>
//               <img src={product.img} alt={product.title} />
//               <h3>{product.title}</h3>
//               <h3>${product.price}</h3>

//               <button className='btn mb-5' style={{background:"#0925b0", color :"white",width: "230px"}}
//               onClick={()=>addToCart(product)}> Add to Cart </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const buyerToken = localStorage.getItem("sellerToken");

  useEffect(() => {
    if (!buyerToken) {
      navigate("/SellerLogin");
    }
  }, [buyerToken, navigate]);

  const [Products, setProducts] = useState([]);
  
  const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/product/get-all");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Optionally display an error message to the user
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const addToCart = (product) => {
    const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = [...updatedCart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    // Optionally update state if you plan to use it elsewhere
  };

  return (
    <>
      <div className='text-center' style={{ marginTop: "130px" }}>
        <h3>Welcome to Dashboard</h3>
        <hr />
      </div>
      <div className="container" style={{ margin: "20px" }}>
        <div className="row text-center">
          {Products.length > 0 ? (
            Products.map((product) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={product._id}>
                <img src={product.img} alt={product.title} style={{ width: '100%', height: 'auto' }} />
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
                <button
                  className='btn mb-5'
                  style={{ background: "#0925b0", color: "white", width: "230px" }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <h3>No products available</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
