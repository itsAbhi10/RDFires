import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

/**
 * HeroCarousel Component
 * Full-width banner carousel with professional fire safety background images
 * Features gradient overlays, smooth animations, and call-to-action buttons
 */
const HeroCarousel = () => {
  const slides = [
    {
      title: 'Your Safety is Our Priority',
      subtitle: 'Professional fire safety solutions for every need',
      icon: '🔥',
      cta: 'Explore Products',
      link: '/products',
      bgImage: '/assets/hero/firefighters.svg',
      overlayGradient: 'linear-gradient(135deg, rgba(31, 41, 55, 0.7) 0%, rgba(220, 38, 38, 0.6) 100%)',
      badge: 'Fire Safety Excellence',
    },
    {
      title: 'Expert Fire Safety Services',
      subtitle: 'Installation, maintenance, and fire audits for complete protection',
      icon: '🛠️',
      cta: 'Our Services',
      link: '/services',
      bgImage: '/assets/hero/fire-cylinders.svg',
      overlayGradient: 'linear-gradient(135deg, rgba(185, 28, 28, 0.7) 0%, rgba(220, 38, 38, 0.6) 100%)',
      badge: '24/7 Support Available',
    },
    {
      title: 'Advanced Gas Suppression Systems',
      subtitle: 'State-of-the-art fire suppression technology for critical environments',
      icon: '⚡',
      cta: 'View Technology',
      link: '/services',
      bgImage: '/assets/hero/gas-suppression.svg',
      overlayGradient: 'linear-gradient(135deg, rgba(31, 41, 55, 0.7) 0%, rgba(220, 38, 38, 0.6) 100%)',
      badge: 'Next-Gen Protection',
    },
    {
      title: 'Real-Time Fire Monitoring',
      subtitle: 'Smart systems that detect, alert, and respond instantly to fire emergencies',
      icon: '📊',
      cta: 'Request Quote',
      link: '/quote',
      bgImage: '/assets/hero/fire-control-room.svg',
      overlayGradient: 'linear-gradient(135deg, rgba(153, 27, 27, 0.7) 0%, rgba(220, 38, 38, 0.6) 100%)',
      badge: 'Smart Fire Detection',
    },
  ];

  return (
    <div className="w-full relative">
      <style>{`
        .hero-carousel {
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          position: relative;
          overflow: hidden;
        }
        .swiper-slide {
          height: 100vh;
          min-height: 600px;
        }
        @media (max-width: 768px) {
          .swiper-slide {
            min-height: 500px;
          }
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.7);
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: white;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(220, 38, 38, 0.7);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(220, 38, 38, 1);
          transform: scale(1.1);
        }
        .badge-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide 
            key={idx} 
            className="hero-carousel" 
            style={{
              backgroundImage: `url('${slide.bgImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          >
            {/* Overlay Gradient */}
            <div 
              className="absolute inset-0 z-5" 
              style={{ background: slide.overlayGradient }}
            />
            
            <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 px-4">
              <div className="max-w-6xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-white">
                    {/* Badge */}
                    <div className="inline-block mb-6 px-4 py-2 bg-fire-red rounded-full text-sm font-bold badge-pulse">
                      {slide.badge}
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-md max-w-lg">
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={slide.link}
                        className="btn-secondary inline-block text-center transform transition hover:scale-105 shadow-lg"
                      >
                        {slide.cta} <FaArrowRight className="inline ml-2" />
                      </Link>
                      <a
                        href="tel:+91-8888368101"
                        className="btn-outline inline-block text-center transform transition hover:scale-105 shadow-lg"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>

                  {/* Right Icon with Animation */}
                  <div className="text-center hidden md:flex items-center justify-center">
                    <div className="text-9xl md:text-10xl drop-shadow-2xl animate-bounce">
                      {slide.icon}
                    </div>
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
