import React,{useState, useEffect} from 'react';
import axios from "axios"



const Banner = () => {
const [data, setData] = useState([])

useEffect(() =>{
 axios.post("https://nailsa2z.com:5027/api/v1/banner/get_all_banner")
 .then((res) =>{
  // console.log(res.data)
   setData(res.data)
 }).catch((err) =>{
  console.log(err)
 })
},[]) 
   
  return (
    <>
     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={data.image} className="d-block w-100" alt="banner" style={{height:"350px"}}/>
    </div>
  </div>
</div> 

    </>
  )
}

export default Banner
