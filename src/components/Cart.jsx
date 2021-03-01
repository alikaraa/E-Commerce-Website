import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataProvider";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        console.log(item);

        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  const notify = () => {
    toast.success("Successful purchase, thank you for choosing us");
  };

  if (cart.length === 0) {
    return <h2 className="align-center font-bold">Cart Empty</h2>;
  }

  return (
    <>
      <div className="bg-gray-300">
        <div className="py-12">
          <div className="max-w-md mx-auto  bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-5">
                    <h1 className="text-xl font-medium ">Shopping Cart</h1>
                    {cart.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="flex justify-between items-center mt-6 pt-6"
                        >
                          <div className="flex items-center">
                            {" "}
                            <img
                              src={product.image}
                              width="60"
                              className="rounded-full "
                            />
                            <div className="flex flex-col ml-3">
                              {" "}
                              <div
                                onClick={() => removeProduct(product.id)}
                                className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs"
                              >
                                Remove
                              </div>{" "}
                              <span className="md:text-md font-medium">
                                {product.name}
                              </span>{" "}
                              <span className="text-xs font-light text-gray-400">
                                {product.detail}
                              </span>{" "}
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className="pr-8 flex ">
                              {" "}
                              <span
                                onClick={() => reduction(product.id)}
                                className="font-semibold cursor-pointer mx-2"
                              >
                                -
                              </span>{" "}
                              <span classNameName="text-lg mr-4 ml-4">
                                {product.count}
                              </span>{" "}
                              <span
                                onClick={() => increase(product.id)}
                                className="font-semibold cursor-pointer mx-2"
                              >
                                +
                              </span>
                            </div>
                            <div className="pr-8 ">
                              {" "}
                              <span className="text-xs font-medium">
                                ${product.price}
                              </span>{" "}
                            </div>
                            <div>
                              {" "}
                              <i className="fa fa-close text-xs font-medium"></i>{" "}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                      <div className="flex items-center">
                        {" "}
                        <i className="fa fa-arrow-left text-sm pr-2"></i>
                        <NavLink to="/shop/mobile">
                          <button className="text-md font-medium text-blue-500 focus:outline-none">
                            Continue Shopping
                          </button>
                        </NavLink>
                      </div>
                      <div className="flex justify-center items-end">
                        {" "}
                        <span className="text-sm font-medium text-gray-400 mr-1">
                          Subtotal:
                        </span>{" "}
                        <span className="text-lg font-bold text-gray-800">
                          ${total}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                  <div className=" p-5 bg-gray-800 rounded overflow-visible">
                    {" "}
                    <span className="text-xl font-medium text-gray-100 block pb-3">
                      Card Details
                    </span>{" "}
                    <span className="text-xs text-gray-400 ">Card Type</span>
                    <div className="overflow-visible flex justify-between items-center mt-2">
                      <div className="rounded w-52 h-28 bg-red-500 py-2 px-4 relative right-10">
                        {" "}
                        <span className="italic text-lg font-medium text-gray-200 underline">
                          VISA
                        </span>
                        <div className="flex justify-between items-center pt-4 ">
                          {" "}
                          <span className="text-xs text-gray-200 font-medium">
                            ****
                          </span>{" "}
                          <span className="text-xs text-gray-200 font-medium">
                            ****
                          </span>{" "}
                          <span className="text-xs text-gray-200 font-medium">
                            ****
                          </span>{" "}
                          <span className="text-xs text-gray-200 font-medium">
                            ****
                          </span>{" "}
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          {" "}
                          <span className="text-xs text-gray-200">
                            Giga Tamarashvili
                          </span>{" "}
                          <span className="text-xs text-gray-200">12/18</span>{" "}
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-col">
                        {" "}
                        <img
                          src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                          width="40"
                          className="relative right-5"
                        />{" "}
                        <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">
                          mastercard.
                        </span>{" "}
                      </div>
                    </div>
                    <div className="flex justify-center flex-col pt-3">
                      {" "}
                      <label className="text-xs text-gray-400 ">
                        Name on Card
                      </label>{" "}
                      <input
                        type="text"
                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="Giga Tamarashvili"
                      />{" "}
                    </div>
                    <div className="flex justify-center flex-col pt-3">
                      {" "}
                      <label className="text-xs text-gray-400 ">
                        Card Number
                      </label>{" "}
                      <input
                        type="text"
                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="**** **** **** ****"
                      />{" "}
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                      <div className="col-span-2 ">
                        {" "}
                        <label className="text-xs text-gray-400">
                          Expiration Date
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {" "}
                          <input
                            type="text"
                            className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                            placeholder="mm"
                          />{" "}
                          <input
                            type="text"
                            className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                            placeholder="yyyy"
                          />{" "}
                        </div>
                      </div>
                      <div className="">
                        {" "}
                        <label className="text-xs text-gray-400">
                          CVV
                        </label>{" "}
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="XXX"
                        />{" "}
                      </div>
                    </div>
                    <button
                      onClick={notify}
                      className="h-12 mb-5 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600"
                    >
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
