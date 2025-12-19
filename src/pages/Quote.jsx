import { useState } from 'react';
import { extinguisherTypes } from '../data/productsData';
import { FaCheckCircle } from 'react-icons/fa';

/**
 * Quote/Enquiry Form Component
 * Allows users to request quotes for fire extinguishers
 * Includes type selection, quantity, location, and form validation
 */
const Quote = () => {
  const [formData, setFormData] = useState({
    extinguisherType: '',
    quantity: '',
    location: '',
    propertyType: '',
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.extinguisherType) {
      newErrors.extinguisherType = 'Please select an extinguisher type';
    }

    if (!formData.quantity || formData.quantity <= 0) {
      newErrors.quantity = 'Please enter a valid quantity';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a property type';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    return newErrors;
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log('Quote form submitted:', formData);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        extinguisherType: '',
        quantity: '',
        location: '',
        propertyType: '',
        name: '',
        email: '',
        phone: '',
        comments: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-gradient-to-r from-fire-dark to-fire-red text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Quote</h1>
          <p className="text-lg text-gray-200">
            Request a customized quote for your fire safety needs
          </p>
        </div>
      </section>

      {/* ===== QUOTE FORM ===== */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          {submitted && (
            <div className="mb-8 p-6 bg-green-100 border-2 border-green-500 rounded-lg flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-3xl flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-800 text-lg">
                  Quote Request Submitted!
                </h3>
                <p className="text-green-700">
                  Our team will review your request and contact you within 24 hours with a
                  customized quote.
                </p>
              </div>
            </div>
          )}

          <div className="card-shadow bg-fire-light p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-fire-dark mb-6">
              Tell Us About Your Needs
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Extinguisher Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Type of Fire Extinguisher <span className="text-fire-red">*</span>
                </label>
                <select
                  name="extinguisherType"
                  value={formData.extinguisherType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition ${
                    errors.extinguisherType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">-- Select Type --</option>
                  {extinguisherTypes.map((type) => (
                    <option key={type.id} value={type.name}>
                      {type.name} - {type.description}
                    </option>
                  ))}
                </select>
                {errors.extinguisherType && (
                  <p className="text-red-600 text-sm mt-1">{errors.extinguisherType}</p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Quantity <span className="text-fire-red">*</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition ${
                    errors.quantity ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter quantity"
                />
                {errors.quantity && (
                  <p className="text-red-600 text-sm mt-1">{errors.quantity}</p>
                )}
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Property Type <span className="text-fire-red">*</span>
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition ${
                    errors.propertyType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">-- Select Type --</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Educational Institution</option>
                  <option value="other">Other</option>
                </select>
                {errors.propertyType && (
                  <p className="text-red-600 text-sm mt-1">{errors.propertyType}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Location / Address <span className="text-fire-red">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your location or address"
                />
                {errors.location && (
                  <p className="text-red-600 text-sm mt-1">{errors.location}</p>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-fire-red">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address <span className="text-fire-red">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number <span className="text-fire-red">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+91-XXXXXXXXXX"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Comments */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Additional Comments
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition resize-none"
                  placeholder="Any specific requirements or questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-primary w-full text-lg py-3">
                Request Quote
              </button>
            </form>

            <p className="text-gray-600 text-sm text-center mt-6">
              We'll review your request and contact you within 24 hours with a
              customized quote
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY REQUEST A QUOTE ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Why Request a Quote?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Customized Solution',
                description:
                  'We assess your specific needs and provide tailored recommendations',
                icon: '⚙️',
              },
              {
                title: 'Competitive Pricing',
                description:
                  'Get the best price without compromising on quality and service',
                icon: '💰',
              },
              {
                title: 'Expert Advice',
                description:
                  'Our fire safety experts help you choose the right products',
                icon: '👨‍🔬',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-shadow bg-white p-6 rounded-lg text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-fire-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUOTE PROCESS ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Our Quote Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Submit', desc: 'Fill the quote form' },
              { step: '2', title: 'Review', desc: 'We assess your needs' },
              { step: '3', title: 'Quote', desc: 'Send customized quote' },
              { step: '4', title: 'Support', desc: '24/7 after-sales service' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-shadow bg-fire-light p-4 rounded-lg text-center"
              >
                <div className="text-4xl font-bold text-fire-red mb-2">
                  {item.step}
                </div>
                <h3 className="font-bold text-fire-dark mb-1">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
