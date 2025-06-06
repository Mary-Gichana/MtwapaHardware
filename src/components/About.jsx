import React from 'react'

function About()   {
  return (
    <div>
      <section className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8 items-center px-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p className="mb-4 text-gray-700">
            At Mtwapa Electrical and Hardware, we provide a comprehensive range
            of electrical supplies, tools, and hardware essentials for homes,
            businesses, and contractors. Our expert team is dedicated to helping
            you find the right products for any project, big or small.
          </p>
        </div>
        <img
          src="public/assets/Image2.jpeg"
          alt="Shop interior"
          className="rounded shadow-lg w-full h-60 object-cover"
        />
      </section>

      <section className="bg-white py-12 mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-xl font-semibold mb-6">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-green-600 mb-2">
                Quality Products
              </h4>
              <p className="text-gray-600">
                We stock only trusted brands and certified products to ensure
                safety and reliability in every purchase.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-600 mb-2">Expert Advice</h4>
              <p className="text-gray-600">
                Our knowledgeable staff are always ready to assist you with
                technical guidance and recommendations.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-600 mb-2">
                Customer Satisfaction
              </h4>
              <p className="text-gray-600">
                We prioritize your needs and strive for excellence in service,
                every time you visit us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About