import { FaAward, FaUsers, FaGlobeAmericas, FaLightbulb } from 'react-icons/fa';

/**
 * About Us Page Component
 * Company overview, mission, vision, certifications, and experience timeline
 */
const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-gradient-to-r from-fire-dark to-fire-red text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About RD Fires</h1>
          <p className="text-lg text-gray-200">
            Leading fire safety solutions provider since 2004
          </p>
        </div>
      </section>

      {/* ===== COMPANY OVERVIEW ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="text-gray-700 mb-4">
                RD Fires is a leading provider of comprehensive fire safety solutions. With over
                two decades of experience, we've established ourselves as a trusted partner for
                residential, commercial, and industrial fire safety needs.
              </p>
              <p className="text-gray-700 mb-4">
                Our commitment to excellence, coupled with our deep understanding of fire safety
                regulations, enables us to deliver solutions that exceed expectations and protect
                what matters most to you.
              </p>
              <p className="text-gray-700">
                We believe that every property deserves comprehensive fire protection. That's why
                we offer a full range of services, from product sales to maintenance and training.
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🏢</div>
              <p className="text-gray-600 text-lg">
                Dedicated to Fire Safety Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card-shadow bg-white p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-4xl text-fire-red" />
                <h3 className="text-2xl font-bold text-fire-dark">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To provide cutting-edge fire safety products and services that protect lives,
                property, and assets. We strive to make fire safety accessible and affordable
                for everyone while maintaining the highest standards of quality and service.
              </p>
            </div>

            {/* Vision */}
            <div className="card-shadow bg-white p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaGlobeAmericas className="text-4xl text-fire-red" />
                <h3 className="text-2xl font-bold text-fire-dark">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To be the most trusted and innovative fire safety solutions provider, recognized
                for our commitment to excellence, customer satisfaction, and continuous improvement
                in protecting communities and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', desc: 'Honest and ethical in all dealings' },
              { title: 'Excellence', desc: 'Commitment to highest quality standards' },
              { title: 'Safety', desc: 'Protecting lives and property' },
              { title: 'Innovation', desc: 'Continuous improvement and innovation' },
            ].map((value, idx) => (
              <div
                key={idx}
                className="card-shadow bg-fire-light p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold text-fire-dark mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Certifications & Standards</h2>
          <p className="section-subtitle text-center">
            Internationally recognized quality and safety standards
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                cert: 'ISO 9001:2015',
                title: 'Quality Management System',
                desc: 'Ensures consistent quality in products and services',
              },
              {
                cert: 'ISO 14001:2015',
                title: 'Environmental Management',
                desc: 'Commitment to environmental sustainability',
              },
              {
                cert: 'OHSAS 18001:2007',
                title: 'Occupational Health & Safety',
                desc: 'Safe working conditions for all employees',
              },
              {
                cert: 'ISI Mark',
                title: 'Indian Standards Institution',
                desc: 'Certified by Bureau of Indian Standards',
              },
              {
                cert: 'BS 5306',
                title: 'British Standards',
                desc: 'International fire safety compliance',
              },
              {
                cert: 'CE Certified',
                title: 'European Conformity',
                desc: 'Meeting European safety regulations',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-shadow bg-white p-6 rounded-lg border-l-4 border-fire-red"
              >
                <h3 className="text-lg font-bold text-fire-red mb-1">{item.cert}</h3>
                <p className="text-fire-dark font-semibold mb-2">{item.title}</p>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Our Journey</h2>
          <p className="section-subtitle text-center">
            20+ years of fire safety excellence
          </p>

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: '2004',
                title: 'Foundation',
                description: 'RD Fires founded with a vision to revolutionize fire safety',
              },
              {
                year: '2008',
                title: 'First Certification',
                description: 'Achieved ISO 9001:2008 certification for quality management',
              },
              {
                year: '2012',
                title: 'Expansion',
                description: 'Expanded services to include maintenance and training programs',
              },
              {
                year: '2016',
                title: 'Multi-Service Hub',
                description: 'Became a complete fire safety solutions provider',
              },
              {
                year: '2020',
                title: 'Industry Leader',
                description: 'Recognized as leading fire safety company in the region',
              },
              {
                year: '2024',
                title: 'Present',
                description: 'Serving 10,000+ satisfied customers across the country',
              },
            ].map((milestone, idx) => (
              <div key={idx} className="mb-8 flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-fire-red text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  {idx !== 5 && (
                    <div className="w-1 h-16 bg-fire-red mt-2"></div>
                  )}
                </div>
                <div className="card-shadow bg-white p-6 rounded-lg flex-1 mt-2">
                  <h3 className="text-lg font-bold text-fire-dark mb-1">
                    {milestone.year} - {milestone.title}
                  </h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM & STATS ===== */}
      <section className="bg-fire-dark text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center text-white">By The Numbers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '20+',
                label: 'Years Experience',
                icon: '⏱️',
              },
              {
                number: '50+',
                label: 'Team Members',
                icon: '👥',
              },
              {
                number: '10K+',
                label: 'Happy Customers',
                icon: '😊',
              },
              {
                number: '24/7',
                label: 'Support Available',
                icon: '📞',
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <p className="text-3xl font-bold text-fire-red mb-2">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="bg-gradient-to-r from-fire-red to-red-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg mb-6">
            Contact us to learn more about our products and services
          </p>
          <button className="btn-secondary">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default About;
