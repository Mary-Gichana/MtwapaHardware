import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import products from "../../products.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Products() {
  return (
    <section id="products" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Our Products
        </h2>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={4}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            1280: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white border rounded-lg shadow-md flex flex-col w-350px h-[350px] items-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-74 h-52 object-cover mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 ">{product.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Products;
