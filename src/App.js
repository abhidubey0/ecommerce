import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Categeories from './components/Categeories'
import StockClearance from './components/StockClearance'
import Allproducts from './components/Allproducts'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container my-4">
      <Banner/>
    </div>
      <Categeories/>
      <StockClearance/>
      <Allproducts/>
      <Footer/>
    </>
  )
}

export default App
