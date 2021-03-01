import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "./DataProvider";

function Navbar() {
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toogleMenu = () => {
    document.getElementById("mobile-menu__open").classList.toggle("hidden");
    document.getElementById("mobile-menu__close").classList.toggle("hidden");
    document.getElementById("mobile-menu__items").classList.toggle("hidden");
  };

  useEffect(() => {
    document.getElementById("mobile-menu__open").addEventListener(
      "click",
      () => {
        toogleMenu();
      },
      false
    );
    document.getElementById("mobile-menu__close").addEventListener(
      "click",
      () => {
        toogleMenu();
      },
      false
    );
  });

  return (
    <main className="js">
      <section className="aw-header bg-white border-b border-gray-200 shadow-md">
        <header className="container mx-auto flex items-center justify-between flex-wrap px-2 py-4 lg:p-6 ">
          <div id="mobile-menu__toggler" className="block lg:hidden">
            <button
              id="mobile-menu__open"
              className="px-3 py-1 w-18 border rounded text-white bg-red-500 border-transparent hover:bg-red-400 transition"
            >
              Menu
            </button>
            <button
              id="mobile-menu__close"
              className="hidden px-3 py-1 w-20 border rounded text-white bg-purple-300 border-transparent hover:bg-purple-900 transition"
            >
              Close
            </button>
          </div>

          <div className="aw-header__logo flex items-center flex-shrink-0 text-red-700 hover:text-purple-900 mx-2 lg:mr-6 order-1 transition">
            <svg
              className="fill-current h-8 w-8 mr-2"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <NavLink to="/">
              <span className="font-semibold text-lg tracking-tight">
                E-Commerce
              </span>
            </NavLink>
          </div>

          <nav
            id="mobile-menu__items"
            className="aw-header__nav   hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto order-3 lg:order-2"
          >
            <ol className="text-lg lg:space-x-16 mx-auto">
              <li className="block mb-4 mt-3 lg:inline-block lg:mb-0 lg:mt-0 mr-4">
                <NavLink
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Home
                </NavLink>
              </li>

              <li className="block mb-4 lg:inline-block  lg:mb-0 mr-4">
                <NavLink
                  to="/about"
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  About
                </NavLink>
              </li>

              <li className="block mb-4 lg:inline-block lg:mb-0 mr-4">
                <NavLink
                  to="/todaydeals"
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Today's Deals
                </NavLink>
              </li>

              <li className="block mb-4 lg:inline-block lg:mb-0 mr-4">
                <NavLink
                  to="/shop/mobile"
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Products & Shop
                </NavLink>
              </li>

              <li className="block lg:inline-block lg:mb-0 mr-4">
                <NavLink
                  to="/contact"
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Contact
                </NavLink>
              </li>
            </ol>
          </nav>

          <div className="flex order-2">
            <NavLink to="/cart">
              <i className="fas fa-cart-arrow-down fa-lg">
                <span className="px-1 text-red-500">{cart.length}</span>
              </i>
            </NavLink>
          </div>
        </header>
      </section>
    </main>
  );
}

export default Navbar;
