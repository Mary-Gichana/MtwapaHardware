import React from 'react'

function Services()   {
  return (
    <div>
      <h2 className="text-2xl font-semibold  text-center mt-5">
        Services
      </h2>
      <section className="max-w-5xl mx-auto py-8 px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Why Choose Mtwapa Electrical and Hardware?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Wide selection of electrical and hardware products</li>
            <li>Competitive pricing for all budgets</li>
            <li>Bulk order discounts for contractors</li>
            <li>Prompt delivery and in-store pickup options</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-green-600 mb-2">Our Products </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Lighting, wiring,modern switches,sockets, and circuit protection
            </li>
            <li>Power tools and hand tools</li>
            <li>Plumbing and building materials</li>
            <li>Safety gear and accessories</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-semibold text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <p className="italic text-gray-700">
                "Great range of products and knowledgeable staff. Always my
                first stop for electrical supplies!"
              </p>
              <div className="mt-4 text-sm text-gray-500">- Jane Mwangi</div>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="italic text-gray-700">
                "Fast delivery and excellent customer service. Highly recommend
                for contractors."
              </p>
              <div className="mt-4 text-sm text-gray-500">- Peter Otieno</div>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="italic text-gray-700">
                "I found everything I needed for my home renovation at great
                prices."
              </p>
              <div className="mt-4 text-sm text-gray-500">- Mercy Wanjiru</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services