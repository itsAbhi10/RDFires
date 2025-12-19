import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ProductCard from './ProductCard';

/**
 * Carousel Component
 * Displays products in a scrollable carousel with navigation and autoplay
 * Uses Swiper library for smooth animations and responsive design
 * Props: products (array of product objects)
 */
const Carousel = ({ products }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="pb-12">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
