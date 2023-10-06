import React ,{ useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { useDispatch ,useSelector } from 'react-redux';
import { getAllProductsAsync, getFilteredProductsAsync } from '../slices/Productpage_slice';
import {Link} from 'react-router-dom'

const ProductPageList = ({search,setSearch}) => { 
  const dispatch=useDispatch();
  const productList = useSelector(state=>state.productpageList.pageProducts);
  useEffect(()=>{
    if(search!=""){
      dispatch(getFilteredProductsAsync(search))
    }else{
      dispatch(getAllProductsAsync())
    }
    
  },[search]);
  
    const navigation =[
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Products", href: "/productpagelist", current: true },
    { name: "Category", href: "/category", current: false },
    { name: "Deals", href: "/deals", current: false },
  ];
  return (
    <div>
        <>
    <Navbar navigation={navigation} search={search} setSearch={setSearch} />
  <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {/*   ✅ Product card 1 - Starts Here 👇 */}
    {productList.length>0 && productList.map((item)=>(
        <div key={item.id} className="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link to={`/product/${item.id}`}  className="cursor-pointer">
          <img
            src= {item.thumbnail}
            alt="Product"
            className="h-48 w-64 object-cover rounded-t-xl"
          />
          <div className="px-2 py-1 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
            {item.title}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${
                item.price}
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">{item.discountPercentage}</p>
              </del>
              <div className="ml-32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-bag-plus"
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))};
    
  </section>
  
</>

    </div>
  )
}

export default ProductPageList

