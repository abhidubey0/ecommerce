import React,{useState, useEffect} from "react";
import axios from "axios"

const StockClearance = () => {
    const [stock, setStock] = useState([])

    useEffect(() =>{
     axios.post("https://nailsa2z.com:5027/api/v1/flashSale/get_stock_clearance")
     .then((res) =>{
      console.log(res.data)
       setStock(res.data)
     }).catch((err) =>{
      console.log(err)
     })
    },[]) 

  return (
    <>
    <div className="container mt-5">
    <h2 style={{textAlign:"center"}}>Stock Clearance</h2>

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

export default StockClearance;
