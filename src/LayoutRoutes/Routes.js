import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Header from '../components/Header/Header'
import Logout from '../components/Logout/Logout'
import ProductDetails from '../components/ProductDetails/ProductDetails'

function RoutesLayout() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
    <Route path='/VK-Store' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>


    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default RoutesLayout