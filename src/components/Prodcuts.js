import React from "react";
import './Products.css'
import { useState,useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data)
      setProducts(data);
      
    };

    fetchProducts();
  }, []);


  const dispatch = useDispatch()
  function handleAdd(product){
    dispatch(add(product))
  }

  return (
    <>
    <div className="container row d-flex justify-content-between">
        {products.map((product) => (
            <div className="card mt-4 d-flex justify-content-center align-items-center" style={{width:'300px',height:'260px',padding:'20px',textAlign:'center'}} key={product.id}>
                <img src={product.image} style={{width:'100px',height:'100px'}} alt="" />
                <h6 className="d-flex justify-content-center pt-3">{product.title}</h6>
                <h5>${product.price}</h5>
                <button onClick={()=>handleAdd(product)} className="btn btn-primary btn-sm" style={{width:'100px',backgroundColor:"#8600ff",borderColor:'Background'}}>Add to cart</button>
          </div>
        )
        )  
        }
    
      </div>
    </>
  );
};

export default Products;
