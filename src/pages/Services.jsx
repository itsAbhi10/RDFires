import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/productsData';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

/**
 * Services Page Component
 * Displays all available services with detailed descriptions
 * Includes service offerings and AMC information
 */
const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-gradient-to-r from-fire-dark to-fire-red text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-200">
            Comprehensive fire safety solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== DETAILED SERVICE DESCRIPTIONS ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Service Details</h2>

          {/* Installation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-fire-dark mb-3">
                Professional Installation
              </h3>
              <p className="text-gray-700 mb-4">
                Our certified technicians ensure proper installation of fire extinguishers
                at your premises. We assess your property and recommend the appropriate
                types and quantities based on fire safety regulations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Site assessment and recommendation
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Expert installation and mounting
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Safety compliance documentation
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg card-shadow flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">✅</p>
                <p className="text-gray-600">
                  Quick and professional installation within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Refilling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg card-shadow flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">⚡</p>
                <p className="text-gray-600">
                  Fast refilling service to keep your extinguishers ready
                </p>
              </div>
            </div>
            <div>
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-2xl font-bold text-fire-dark mb-3">
                Quick Refilling Service
              </h3>
              <p className="text-gray-700 mb-4">
                After use or expiration, our team refills all types of fire extinguishers
                with premium-quality agents. We provide same-day or next-day service.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  All types of extinguishers
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Premium quality agents
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Quick turnaround time
                </li>
              </ul>
            </div>
          </div>

          {/* Maintenance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-fire-dark mb-3">
                Maintenance & Annual Maintenance Contract (AMC)
              </h3>
              <p className="text-gray-700 mb-4">
                Regular maintenance ensures your fire extinguishers are always in perfect
                working condition. Our AMC plans offer hassle-free maintenance at fixed costs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Monthly inspection and testing
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Pressure gauge checking
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Annual hydrostatic testing
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg card-shadow flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">📅</p>
                <p className="text-gray-600">
                  Annual Maintenance Contracts starting from ₹5,000 per year
                </p>
              </div>
            </div>
          </div>

          {/* Fire Audit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg card-shadow flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">📋</p>
                <p className="text-gray-600">
                  Comprehensive fire safety audit reports with recommendations
                </p>
              </div>
            </div>
            <div>
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-fire-dark mb-3">
                Fire Safety Audit
              </h3>
              <p className="text-gray-700 mb-4">
                Our fire safety experts conduct thorough audits of your premises to identify
                risks and recommend improvements according to national and international standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Complete risk assessment
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Compliance checking
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Detailed audit report
                </li>
              </ul>
            </div>
          </div>

          {/* Training */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-fire-dark mb-3">
                Fire Safety Training Programs
              </h3>
              <p className="text-gray-700 mb-4">
                Educate your staff and residents about fire safety with our comprehensive
                training programs led by certified fire safety experts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Hands-on training sessions
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Emergency evacuation procedures
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Certification upon completion
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg card-shadow flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">🎓</p>
                <p className="text-gray-600">
                  Regular group sessions and customized corporate training
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AMC SECTION ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Annual Maintenance Contract (AMC)</h2>
          <p className="section-subtitle text-center">
            Worry-free fire safety with our comprehensive AMC plans
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Silver Plan',
                price: '₹5,000/year',
                features: [
                  'Quarterly inspections',
                  'Pressure gauge check',
                  'Basic reporting',
                  '24/7 support',
                ],
              },
              {
                name: 'Gold Plan',
                price: '₹8,000/year',
                features: [
                  'Monthly inspections',
                  'Full testing & refilling',
                  'Annual audit',
                  'Detailed reports',
                  'Emergency support',
                ],
                highlight: true,
              },
              {
                name: 'Platinum Plan',
                price: '₹12,000/year',
                features: [
                  'Weekly monitoring',
                  'Complete maintenance',
                  'Quarterly audit',
                  'Training included',
                  '24/7 priority support',
                  'Free replacements',
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`card-shadow p-6 rounded-lg text-center ${
                  plan.highlight ? 'bg-fire-red text-white ring-4 ring-fire-red' : 'bg-white'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-3xl font-bold mb-4 ${plan.highlight ? 'text-white' : 'text-fire-red'}`}>
                  {plan.price}
                </p>
                <ul className={`space-y-2 mb-6 text-left ${plan.highlight ? 'text-white' : 'text-gray-700'}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={plan.highlight ? 'btn-secondary' : 'btn-primary'}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-gradient-to-r from-fire-red to-red-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Services Today
          </h2>
          <p className="text-lg mb-6">
            Ensure complete fire safety with our professional services and maintenance plans
          </p>
          <Link to="/contact" className="btn-secondary inline-block">
            Request a Service <FaArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
