import React from "react";
import AboutUs from "../components/AboutUs";
import Jobs from "../components/Jobs";
import JobsPrice from "../components/JobsPrice";

function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We are committed to revolutionizing
              <br className="hidden lg:inline-block" /> e-commerce!
            </h1>
            <p className="mb-8 leading-relaxed">
              our biggest passion; To provide companies with the tools they need
              to transform their e-commerce activities. our biggest passion; To
              provide companies with the tools they need to transform their
              e-commerce activities.our biggest passion; To provide companies
              with the tools they need to transform their e-commerce
              activities.our biggest passion; To provide companies with the
              tools they need to transform their e-commerce activities.
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.amazonteknik.com/wp-content/uploads/2019/03/e-commerce-concept_23-2147505751-720x600.jpg"
            />
          </div>
        </div>
        <AboutUs />
        <Jobs />
        <JobsPrice />
      </section>
    </>
  );
}

export default About;
