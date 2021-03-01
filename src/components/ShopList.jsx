import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../components/DataProvider";
import ShopNav from "../components/ShopNav";

const Shop = (props) => {
  const value = useContext(DataContext);

  const [products] = value.products;
  const addCart = value.addCart;
  const [_products, setProducts] = useState({});
  const paramid = props.match.params.id;
  console.log(paramid);
  useEffect(() => {}, [products]);

  return (
    <>
      <ShopNav />
      <section className="text-gray-600  body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap m-4">
            {
              <>
                {/* <h2>{products[].mobile.categoryName }</h2> */}
                {products.mobile.products.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className=" transform transition duration-500 hover:scale-90 max-w-sm mb-5 rounded overflow-hidden shadow mx-2"
                    >
                      <img
                        className="w-full"
                        src={product.image}
                        alt="Sunset in the mountains"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {product.name}
                        </div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          {product.detail}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          {product.price}$
                        </span>
                        <button
                          onClick={() => addCart(product.id, paramid)}
                          className=" inline-block bg-yellow-300 hover:opacity-100 text-yellow-900 hover:text-gray-900 opacity-75 rounded-full px-3 py-1 text-sm font-semibold  float-right mr-2 focus:outline-white "
                        >
                          {" "}
                          BUY NOW
                        </button>
                        {/* {
                                                  console.log("id", product.id)
                                              } */}
                      </div>
                    </div>
                  );
                })}
              </>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
