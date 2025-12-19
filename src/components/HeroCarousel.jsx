import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

/**
 * HeroCarousel Component
 * Full-width banner carousel with hero images and call-to-action
 * Autoplay with navigation and pagination controls
 */
const HeroCarousel = () => {
  const slides = [
    {
      title: 'Your Safety is Our Priority',
      subtitle: 'Professional fire safety solutions for every need',
      image: '🔥',
      cta: 'Explore Products',
      link: '/products',
      bgColor: 'from-fire-dark to-fire-red',
    },
    {
      title: 'Expert Fire Safety Services',
      subtitle: 'Installation, maintenance, and fire audits',
      image: '🛠️',
      cta: 'Our Services',
      link: '/services',
      bgColor: 'from-red-700 to-fire-red',
    },
    {
      title: 'Annual Maintenance Plans',
      subtitle: 'Keep your equipment ready year-round',
      image: '📅',
      cta: 'View AMC Plans',
      link: '/amc',
      bgColor: 'from-fire-dark via-fire-red to-red-600',
    },
    {
      title: 'Get a Free Quote Today',
      subtitle: 'Customized fire safety solutions for your property',
      image: '📋',
      cta: 'Request Quote',
      link: '/quote',
      bgColor: 'from-red-800 to-fire-red',
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="w-full h-screen"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`bg-gradient-to-r ${slide.bgColor} text-white w-full h-full flex items-center justify-center`}
            >
              <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-gray-100 mb-8">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={slide.link}
                        className="btn-secondary inline-block text-center"
                      >
                        {slide.cta} <FaArrowRight className="inline ml-2" />
                      </Link>
                      <a
                        href="tel:+91-22-XXXX-XXXX"
                        className="btn-outline inline-block text-center"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>

                  {/* Right Icon */}
                  <div className="text-center hidden md:block">
                    <div className="text-9xl mb-4">{slide.image}</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
