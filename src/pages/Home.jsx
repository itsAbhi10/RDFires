import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import HeroCarousel from '../components/HeroCarousel';
import {
  extinguisherTypes,
  services,
  whyChooseUs,
  products,
} from '../data/productsData';

/**
 * Home Page Component
 * Landing page with hero carousel, company intro, product types,
 * services overview, and call-to-action sections
 */
const Home = () => {
  return (
    <div className="bg-white">
      {/* ===== HERO CAROUSEL ===== */}
      <HeroCarousel />

      {/* ===== COMPANY INTRODUCTION ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">About RD Fires</h2>
          <p className="section-subtitle text-center">
            Leading provider of fire safety solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                number: '20+',
                label: 'Years of Experience',
                icon: '⏱️',
              },
              {
                number: '10K+',
                label: 'Satisfied Customers',
                icon: '👥',
              },
              {
                number: '50+',
                label: 'Expert Team Members',
                icon: '👨‍💼',
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-2">{stat.icon}</div>
                <p className="text-3xl font-bold text-fire-red mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-center mb-6 max-w-3xl mx-auto">
            RD Fires is committed to providing comprehensive fire safety solutions.
            We offer a wide range of fire extinguishers, maintenance services, and
            expert fire safety consulting to keep your property protected 24/7.
          </p>

          <div className="text-center">
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TYPES OF FIRE EXTINGUISHERS ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Types of Fire Extinguishers</h2>
          <p className="section-subtitle text-center">
            Choose the right fire safety solution for your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {extinguisherTypes.map((type) => (
              <div
                key={type.id}
                className={`${type.color} p-6 rounded-lg text-center card-shadow`}
              >
                <div className="text-4xl mb-3 flex justify-center">{type.icon}</div>
                <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                <p className="text-sm text-gray-700">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS CAROUSEL ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Our Products</h2>
          <p className="section-subtitle text-center">
            High-quality, certified fire extinguishers
          </p>

          <Carousel products={products} />

          <div className="text-center mt-8">
            <Link to="/products" className="btn-primary">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle text-center">
            Comprehensive fire safety solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-fire-dark text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center text-white">Why Choose Us</h2>
          <p className="section-subtitle text-center text-gray-300">
            Industry-leading fire safety solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 p-6 rounded-lg flex items-start gap-4"
              >
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS / TRUST BADGES ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Certifications & Standards</h2>
          <p className="section-subtitle text-center">
            Meeting international quality benchmarks
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management' },
              { name: 'ISO 14001:2015', desc: 'Environmental Management' },
              { name: 'ISI Mark', desc: 'Indian Standards' },
              { name: 'BS 5306', desc: 'British Standards' },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="card-shadow bg-white p-6 text-center flex items-center justify-center flex-col"
              >
                <FaStar className="text-4xl text-fire-red mb-3" />
                <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL-TO-ACTION ===== */}
      <section className="bg-gradient-to-r from-fire-red to-red-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Fire Safety Solutions?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Contact us today for a free consultation and personalized fire safety assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Get a Free Quote <FaArrowRight className="inline ml-2" />
            </Link>
            <a href="tel:+91-22-XXXX-XXXX" className="btn-outline">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
