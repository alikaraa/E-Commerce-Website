import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../components/DataProvider";

const TodayDeals = () => {
  const value = useContext(DataContext);

  const [products] = value.products;
  const addCart = value.addCart;
  const [_products, setProducts] = useState({});

  useEffect(() => {}, [products]);

  return (
    <>
      <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-4xl rounded bg-white  p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          {products.mobile.products.map((product) => {
            console.log("products", products);
            return (
              <div
                key={product.id}
                className="md:flex shadow items-center mb-5 -mx-10"
              >
                <br />
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      className="w-full  relative z-10"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      {product.name}
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="#"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                  <div>
                    <div className=" text-red-700 ">
                      <span className="  text-3xl leading-none align-baseline">
                        $
                      </span>
                      <span className="font-bold text-3xl leading-none align-baseline">
                        99
                      </span>
                      <span className="text-3xl leading-none align-baseline">
                        .90
                      </span>
                    </div>

                    <div className="inline-block align-bottom mr-5 ">
                      <del>
                        <span className="text-2xl leading-none align-baseline">
                          $
                        </span>
                        <span className="font-bold text-2xl leading-none align-baseline">
                          149
                        </span>
                        <span className="text-2xl leading-none align-baseline">
                          .90
                        </span>
                      </del>
                    </div>
                    <div className="inline-block align-bottom ml-12">
                      <button
                        onClick={() =>
                          addCart(product.id, products.mobile.categoryName)
                        }
                        className="bg-yellow-300 focus:outline-none opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2  font-semibold"
                      >
                        <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodayDeals;
