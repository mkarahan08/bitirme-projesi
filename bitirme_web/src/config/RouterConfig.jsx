import React from 'react'
import {Route , Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element = {<ProductDetail/>}/>
    </Routes>
  )
}

export default RouterConfig
