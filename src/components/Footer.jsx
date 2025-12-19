import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { companyDetails } from '../data/productsData';

/**
 * Footer Component
 * Contains company information, quick links, services, and social media icons
 * Responsive design for all screen sizes
 */
const Footer = () => {
  return (
    <footer className="bg-fire-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-fire-red p-2 rounded">
                <span>🔥</span>
              </div>
              <h3 className="text-xl font-bold">RD Fires</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner in fire safety solutions since 2004.
            </p>
            <p className="text-gray-500 text-xs">
              {companyDetails.certifications.join(', ')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-fire-red transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-fire-red transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-fire-red transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-fire-red transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-fire-red transition cursor-pointer">
                Installation
              </li>
              <li className="hover:text-fire-red transition cursor-pointer">
                Refilling
              </li>
              <li className="hover:text-fire-red transition cursor-pointer">
                Maintenance & AMC
              </li>
              <li className="hover:text-fire-red transition cursor-pointer">
                Fire Audit
              </li>
              <li className="hover:text-fire-red transition cursor-pointer">
                Training
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-fire-red mt-1 flex-shrink-0" />
                <p>{companyDetails.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-fire-red" />
                <a
                  href="tel:+91-22-XXXX-XXXX"
                  className="hover:text-fire-red transition"
                >
                  {companyDetails.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-fire-red" />
                <a
                  href="mailto:info@rdfires.com"
                  className="hover:text-fire-red transition"
                >
                  {companyDetails.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          {/* Social Media */}
          {/* <div className="flex justify-center gap-6 mb-8">
            <a
              href={companyDetails.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fire-red text-2xl transition"
            >
              <FaFacebook />
            </a>
            <a
              href={companyDetails.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fire-red text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href={companyDetails.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fire-red text-2xl transition"
            >
              <FaTwitter />
            </a>
            <a
              href={companyDetails.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fire-red text-2xl transition"
            >
              <FaInstagram />
            </a>
          </div> */}

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} RD Fire Engineers. All rights reserved.
            </p>
            <p>Protecting lives through fire safety excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
