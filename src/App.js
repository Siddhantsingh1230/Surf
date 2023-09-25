import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import About from './pages/About';
import Deals from './pages/Deals';
import Category from './pages/Category';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/deals" element={<Deals/>}/>
          <Route exact path="/category" element={<Category/>}/>
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
