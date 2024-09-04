// import React, {useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'

// const Cart = () => {
//     const [cart, setCart]=useState([]);
//     useEffect(()=> {
//         const savedCart = JSON.parse(localStorage.getItem('cart'))|| [];
//         setCart(savedCart);
//     })

//   return (
//     <>
//     <div>Cart</div>
//     <div className="container">
//         <div className="row">
//             {
//                 savedCart.length > 0 ? (
//                     <>
//                     cart.map(item)=>(
//                         <img src={item.img}/>
//                         <h2>{item.title}</h2>
//                         <h2>{item.price}</h2>
//                     )
//                     </>

//                 ) : (
//                     <h1>cart is empety</h1>
//                 )
//             }
//         </div>
//     </div>
//     </>  
// )
// }

// export default Cart



import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  return (
    <>
      <div>Cart</div>
      <div className="container">
        <div className="row">
          {
          cart.length > 0 ? (
            cart.map((item) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={item._id}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto' }} />
                <h2>{item.title}</h2>
                <h2>${item.price}</h2>
              </div>
            ))
          ) : (
            <h1>Cart is empty</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
