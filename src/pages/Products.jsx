import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, extinguisherTypes } from '../data/productsData';
import { FaFilter } from 'react-icons/fa';

/**
 * Products Page Component
 * Displays all products with filtering by type
 * Responsive grid layout with product cards
 */
const Products = () => {
  const [selectedType, setSelectedType] = useState('All');

  // Filter products based on selected type
  const filteredProducts =
    selectedType === 'All'
      ? products
      : products.filter((product) => product.type === selectedType);

  return (
    <div className="bg-white min-h-screen">
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-gradient-to-r from-fire-dark to-fire-red text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-200">
            Browse our comprehensive range of certified fire extinguishers
          </p>
        </div>
      </section>

      {/* ===== FILTER SECTION ===== */}
      <section className="py-8 bg-fire-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <FaFilter className="text-fire-red" />
            <h2 className="text-xl font-bold text-fire-dark">Filter by Type</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* All Types Button */}
            <button
              onClick={() => setSelectedType('All')}
              className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                selectedType === 'All'
                  ? 'btn-primary'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              All Types
            </button>

            {/* Type Filter Buttons */}
            {extinguisherTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.name)}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                  selectedType === type.name
                    ? 'btn-primary'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>

          <p className="text-gray-600 mt-4">
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No products found for the selected type.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== PRODUCT INFO SECTION ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Need Help Choosing?</h2>
          <p className="section-subtitle text-center">
            Our experts are here to guide you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Use',
                description:
                  'For homes and apartments, ABC or Water type extinguishers are recommended.',
              },
              {
                title: 'Commercial Use',
                description:
                  'Businesses benefit from Multi-purpose ABC extinguishers with regular maintenance.',
              },
              {
                title: 'Industrial Use',
                description:
                  'Industries require specialized solutions including CO2 and Clean Agent types.',
              },
            ].map((info, idx) => (
              <div
                key={idx}
                className="card-shadow bg-white p-6 rounded-lg hover:bg-fire-red hover:text-white transition duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <p className="text-gray-700 hover:text-white transition duration-300">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-primary">
              Request a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-gradient-to-r from-fire-red to-red-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg mb-6">
            Contact our team for bulk orders, customized solutions, and special pricing
          </p>
          <button className="btn-secondary">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default Products;
