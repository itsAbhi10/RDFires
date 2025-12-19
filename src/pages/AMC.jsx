import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

/**
 * AMC (Annual Maintenance Contract) Page Component
 * Detailed information about AMC plans, benefits, and features
 */
const AMC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-gradient-to-r from-fire-dark to-fire-red text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fire Safety AMC Program
          </h1>
          <p className="text-lg text-gray-200">
            Comprehensive Annual Maintenance Contracts for worry-free fire safety
          </p>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">What is Fire Safety AMC?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <p className="text-gray-700 mb-4">
                An Annual Maintenance Contract (AMC) is a comprehensive service plan that ensures
                your fire extinguishers are always in perfect working condition. Our skilled
                technicians perform regular inspections, testing, and maintenance to keep your
                equipment ready for any emergency.
              </p>
              <p className="text-gray-700 mb-4">
                With an AMC, you get:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Regular inspections and testing
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Immediate replacement of faulty equipment
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  24/7 emergency support
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-fire-red" />
                  Compliance documentation
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">📅</div>
              <p className="text-gray-600">
                Peace of mind with regular professional maintenance
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="btn-primary">
              Get Your AMC Quote
            </button>
          </div>
        </div>
      </section>

      {/* ===== AMC PLANS ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Choose Your Plan</h2>
          <p className="section-subtitle text-center">
            Flexible AMC options for every requirement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Silver Plan */}
            <div className="card-shadow bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-fire-dark mb-2">Silver Plan</h3>
              <p className="text-3xl font-bold text-fire-red mb-1">₹5,000</p>
              <p className="text-gray-600 mb-6">/year</p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">Quarterly inspections</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">Pressure gauge check</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">Basic service report</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">Phone support</span>
                </li>
              </ul>

              <button className="btn-primary w-full">Select Plan</button>
            </div>

            {/* Gold Plan */}
            <div className="card-shadow bg-fire-red text-white p-8 rounded-lg ring-4 ring-fire-red relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-fire-red px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Gold Plan</h3>
              <p className="text-3xl font-bold mb-1">₹8,000</p>
              <p className="text-gray-100 mb-6">/year</p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <FaCheckCircle />
                  <span>Monthly inspections</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle />
                  <span>Complete testing & refilling</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle />
                  <span>Annual fire audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle />
                  <span>Detailed monthly reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle />
                  <span>24/7 priority support</span>
                </li>
              </ul>

              <button className="btn-secondary w-full">Select Plan</button>
            </div>

            {/* Platinum Plan */}
            <div className="card-shadow bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-fire-dark mb-2">Platinum Plan</h3>
              <p className="text-3xl font-bold text-fire-red mb-1">₹12,000</p>
              <p className="text-gray-600 mb-6">/year</p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">Weekly monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">Complete maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">Quarterly audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">Free training program</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">Free replacements</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-fire-red" />
                  <span className="text-gray-700">24/7 premium support</span>
                </li>
              </ul>

              <button className="btn-primary w-full">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">What's Included in Our AMC</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Regular Inspections',
                desc: 'Routine check-ups to ensure all equipment is in working order',
                icon: '🔍',
              },
              {
                title: 'Pressure Testing',
                desc: 'Monthly pressure gauge checks and maintenance',
                icon: '⚖️',
              },
              {
                title: 'Refilling Services',
                desc: 'Professional refilling with premium quality agents',
                icon: '♻️',
              },
              {
                title: 'Compliance Reports',
                desc: 'Detailed documentation for regulatory compliance',
                icon: '📋',
              },
              {
                title: 'Emergency Support',
                desc: 'Quick response for emergency maintenance needs',
                icon: '🚨',
              },
              {
                title: 'Annual Audit',
                desc: 'Comprehensive fire safety audit (Gold & Platinum plans)',
                icon: '✅',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-shadow bg-fire-light p-6 rounded-lg flex gap-4"
              >
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-fire-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="bg-fire-dark text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center text-white">Why Choose Our AMC?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Cost Savings',
                description: 'Save up to 30% with annual contracts vs. pay-per-service',
              },
              {
                title: 'Peace of Mind',
                description: 'Know your fire safety equipment is always ready',
              },
              {
                title: 'Expert Team',
                description: 'Certified technicians with 20+ years of experience',
              },
              {
                title: 'Regulatory Compliance',
                description: 'Meet all local and national fire safety requirements',
              },
              {
                title: 'Priority Support',
                description: 'Emergency response within 30 minutes',
              },
              {
                title: 'Transparent Pricing',
                description: 'No hidden charges, fixed annual cost',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-lg flex items-start gap-4"
              >
                <div className="text-2xl flex-shrink-0">✨</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Simple 3-Step Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'We assess your needs and recommend the right plan',
              },
              {
                step: '2',
                title: 'Agreement',
                description: 'Sign the AMC agreement with clear terms and pricing',
              },
              {
                step: '3',
                title: 'Service',
                description: 'Regular maintenance and 24/7 support throughout the year',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-fire-red text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-fire-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center">AMC FAQs</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Can I upgrade my plan?',
                a: 'Yes, you can upgrade to a higher plan at any time. We will prorate the charges accordingly.',
              },
              {
                q: 'What happens after 1 year?',
                a: 'Your AMC will be up for renewal. We will send you a renewal notice 30 days before expiration.',
              },
              {
                q: 'Are refills included in the AMC?',
                a: 'Yes, refills are included in the Gold and Platinum plans. Silver plan has refills at 50% discount.',
              },
              {
                q: 'Do I need to pay extra for emergency service?',
                a: 'No, emergency service is included in all AMC plans with guaranteed response time.',
              },
              {
                q: 'Can I cancel the AMC?',
                a: 'Yes, you can cancel anytime with 30 days notice. Early cancellation may have minimal fees.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="card-shadow bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-fire-dark mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-gradient-to-r from-fire-red to-red-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Fire Safety?
          </h2>
          <p className="text-lg mb-8">
            Choose an AMC plan and get professional maintenance all year round
          </p>
          <Link to="/contact" className="btn-secondary inline-block">
            Start Your AMC <FaArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AMC;
