import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <section className="relative bg-black text-white h-[620px] flex flex-col justify-center items-center">
        <img
          src="/assets/Image3.jpeg"
          alt="Electrical hardware background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm uppercase tracking-widest">
            Your Trusted Electrical & Hardware Partner
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Powering Your Projects with Quality Electrical & Hardware Solutions
          </h1>
        </div>
      </section>

      <section id="about" className="bg-white">
        <About />
      </section>
      <section className="relative bg-gray-900 text-white py-16 flex flex-col items-center mt-12">
        <img
          src="/assets/Image1.jpeg"
          alt="Hardware tools"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Supplies Fast? Visit Our Store
          </h2>
        </div>
      </section>

      <section id="services" className="bg-white">
        <Services />
      </section>

      <section id="contact" className="bg-white">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
