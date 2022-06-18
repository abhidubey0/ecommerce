import React,{useState, useEffect} from "react";
import axios from "axios"

const Categeories = () => {
    const [category, setCategory] = useState([])

    useEffect(() =>{
     axios.post("https://nailsa2z.com:5027/api/v1/category/get_all_category")
     .then((res) =>{
      console.log(res.data)
       setCategory(res.data)
     }).catch((err) =>{
      console.log(err)
     })
    },[]) 

  return (
    <>
    <div className="container mt-5">
    <h2 style={{textAlign:"center"}}>Top categories</h2>

      <div className="productwrapper">

      <div className="card" style={{width:"18rem"}}>
        <img src={category.image} className="card-img-top" alt="img" style={{height:"100%"}} />
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

export default Categeories;
