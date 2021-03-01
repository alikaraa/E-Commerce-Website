import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              What is e-commerce ?
            </h1>
            <p className="mb-8 leading-relaxed">
              It means the same as e-commerce or electronic commerce as it is
              known in our country. It is the general definition of the sites
              that shop online. It is used as e-commerce abroad, especially in
              English speaking countries. E-commerce, e-commerce in Turkish, has
              started to enter our lives as a part of the technological
              developments that facilitate information communication after 1995,
              with the liberalization of trade all over the world. Apart from
              traditional marketing methods, it has also created different areas
              by including digital marketing. It can also be called the
              electronic form of commerce.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://miro.medium.com/max/1200/1*MXj8iKQ2twV1ImTSRkwYCw.jpeg"
            />
          </div>
        </div>
      </section>

      <div className="md:flex  py-16 px-10 bg-indigo-600 text-indigo-200 text-center">
        <div className="mr-2  text-center ">
          <NavLink to="/shop/mobile">
            <img
              src="img/mobile.png"
              className="w-full mb-4   rounded border-solid border-2 border-indigo-400"
            />
          </NavLink>

          <p>Mobile!</p>
        </div>

        <div className="mr-2 mt-8 text-center">
          <NavLink to="/shop/laptop">
            <img
              src="img/notebook.jpg"
              className="w-full mb-4 rounded border-solid border-2 border-indigo-400"
            />
          </NavLink>
          <p>Laptop & Notebook!</p>
        </div>

        <div className="mr-2 text-center">
          <NavLink to="/shop/headphone">
            <img
              src="https://triphackr.com/wp-content/uploads/The-Complete-Carry-On-Packing-List-2.png"
              className="w-full mb-4 rounded border-solid border-2 border-indigo-400"
            />
          </NavLink>
          <p>Headphones!</p>
        </div>

        <div className="mr-2 mt-8 text-center">
          <NavLink to="/shop/watches">
            <img
              src="https://833928.smushcdn.com/1698965/wp-content/uploads/2020/09/sub_date_hero-1400x788.jpg?lossy=1&strip=1&webp=1"
              className="w-full mb-4 rounded border-solid border-2 border-indigo-400"
            />
          </NavLink>
          <p>Watches!</p>
        </div>
      </div>
    </>
  );
}

export default Home;
