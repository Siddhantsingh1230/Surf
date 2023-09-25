import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import About from './pages/About';
import Deals from './pages/Deals';
import Category from './pages/Category';

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
        </Routes>
      </Router>
    </>
  )
}

export default App
