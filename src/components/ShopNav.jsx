import React from "react"
import { NavLink } from "react-router-dom"

function ShopNav() {
    return (
        <header className="text-gray-600 body-font bg-gray-300 ">
        < div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <NavLink to="/shop/laptop">
                    <button className="mr-5 focus:outline-none hover:text-gray-900">Laptop & Notebook</button>
                </NavLink>
                <NavLink to="/shop/headphone">
                    <button className="mr-5 focus:outline-none hover:text-gray-900">Headphones</button>
                </NavLink>
                <NavLink to="/shop/watches">
                    <button className="mr-5 focus:outline-none hover:text-gray-900">Watches</button>
                </NavLink>

            </nav>

        </div>
    </header>
    )
}

export default ShopNav