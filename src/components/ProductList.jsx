import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import star from "../assets/images/star.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAsync } from "../slices/ProductListSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.productList.products);
  // fetching product list and dispatching fetch actions here
  useEffect(()=>{
    dispatch(fetchAllProductsAsync());
  },[dispatch]);
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative ">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>

                    <p className=" text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-900">
                      ₹
                      {Math.round(
                        product.price * (1 - product.discountPercentage / 100)
                      )}
                    </p>
                    <p className="line-through text-sm text-gray-500">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
                <p className="flex  align-middle">
                  <img className="h-4 w-4 inline" src={star} alt="" />
                  <span className="text-xs  text-gray-800">
                    {product.rating}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
