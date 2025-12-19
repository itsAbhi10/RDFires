/**
 * ServiceCard Component
 * Displays individual service with icon and description
 * Used in Services page and Home page sections
 */
const ServiceCard = ({ service }) => {
  return (
    <div className="card-shadow bg-white p-6 text-center hover:bg-fire-red hover:text-white transition duration-300">
      {/* Service Icon */}
      <div className="text-5xl mb-4 flex justify-center">{service.icon}</div>

      {/* Service Name */}
      <h3 className="text-xl font-bold mb-3">{service.name}</h3>

      {/* Service Description */}
      <p className="text-gray-600 hover:text-white transition duration-300">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
