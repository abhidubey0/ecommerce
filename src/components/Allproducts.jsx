import React,{useState, useEffect} from "react";
import axios from "axios"

const Allproducts = () => {
    const [allProduct, setAllProduct] = useState([])

    useEffect(() =>{
     axios.post("https://nailsa2z.com:5027/api/v1/products/get_all_products_app")
     .then((res) =>{
      console.log(res.data)
      setAllProduct(res.data)
     }).catch((err) =>{
      console.log(err)
     })
    },[]) 
  
  return (
    <>
    <div className="container mt-5">
    <h2 style={{textAlign:"center"}}>New Products</h2>

      <div className="productwrapper">
      <div className="card" style={{width:"18rem"}}>
        <img src="https://source.unsplash.com/random" className="card-img-top" alt="img" style={{height:"100%"}} />
        <div className="card-body">
          <p className="card-text">
           Abhi
          </p>
        </div>
      </div>
    
      </div>

    </div>
    </>
  );
};

export default Allproducts;
