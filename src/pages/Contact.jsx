import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import { companyDetails } from '../data/productsData';

/**
 * Contact Page Component
 * Contact form with validation, company details, location map embed,
 * and multiple contact methods
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};

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
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
    // Clear error for this field when user starts typing
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
      // Form is valid - in real app, send to backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200">
            Get in touch with our fire safety experts
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-fire-dark mb-6">
                Contact Information
              </h2>

              {/* Phone */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <FaPhone className="text-fire-red text-lg" />
                  <h3 className="text-lg font-semibold text-fire-dark">Phone</h3>
                </div>
                <a
                  href="tel:+91-22-XXXX-XXXX"
                  className="text-gray-700 hover:text-fire-red transition"
                >
                  {companyDetails.phone}
                </a>
                <p className="text-gray-600 text-sm mt-1">Available 24/7</p>
              </div>

              {/* Email */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <FaEnvelope className="text-fire-red text-lg" />
                  <h3 className="text-lg font-semibold text-fire-dark">Email</h3>
                </div>
                <a
                  href="mailto:info@rdfires.com"
                  className="text-gray-700 hover:text-fire-red transition"
                >
                  {companyDetails.email}
                </a>
                <p className="text-gray-600 text-sm mt-1">We respond within 2 hours</p>
              </div>

              {/* Address */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <FaMapMarkerAlt className="text-fire-red text-lg" />
                  <h3 className="text-lg font-semibold text-fire-dark">Address</h3>
                </div>
                <p className="text-gray-700">{companyDetails.address}</p>
              </div>

              {/* Business Hours */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <FaClock className="text-fire-red text-lg" />
                  <h3 className="text-lg font-semibold text-fire-dark">
                    Business Hours
                  </h3>
                </div>
                <div className="text-gray-700 text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency only</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-shadow bg-fire-light p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-fire-dark mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 text-lg" />
                    <div>
                      <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                      <p className="text-green-700 text-sm">
                        We'll get back to you shortly
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
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

                  {/* Email Field */}
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

                  {/* Phone Field */}
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

                  {/* Subject Field */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject <span className="text-fire-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="What is this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message <span className="text-fire-red">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red transition resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your message here..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="bg-fire-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Find Us On Map</h2>

          <div className="rounded-lg overflow-hidden card-shadow h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8207253826466!2d72.82596!3d19.05865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c7e7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sIndustrial%20Area%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is the response time for emergency calls?',
                a: 'We respond to emergency calls within 15-30 minutes in the city area. Call our emergency hotline at +91-22-XXXX-XXXX.',
              },
              {
                q: 'Do you provide fire extinguisher rental services?',
                a: 'Yes, we provide rental services for short-term and long-term needs. Contact us for pricing and availability.',
              },
              {
                q: 'Are your products certified?',
                a: 'All our products are certified by ISI, BS 5306, and international standards. We provide genuine, certified products only.',
              },
              {
                q: 'How often should fire extinguishers be serviced?',
                a: 'Fire extinguishers should be inspected monthly and serviced annually. Our AMC plans include regular maintenance.',
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
    </div>
  );
};

export default Contact;
