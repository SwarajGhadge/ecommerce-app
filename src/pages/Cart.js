import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch= useDispatch();
  function handleRemove(productId){
    dispatch(remove(productId))
  }
  return (
    <div className="container">
      <h1>Cart</h1>
      {products.map((product) => {
        return (
          <div className="container d-flex justify-content-start align-items-center mt-5" >
              <img src={product.image} style={{ width: "150px", height: "150px" }}alt=""/>
            <div className="info m-5" >
              <h6>{product.title}</h6>
              <h5>${product.price}</h5>
              <button onClick={()=>handleRemove(product.id)}className="btn btn-danger btn-sm"style={{width: "100px",}}>REMOVE</button>
            </div> 
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
