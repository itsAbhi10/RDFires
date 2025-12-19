import { FaStar } from 'react-icons/fa';

/**
 * ProductCard Component
 * Displays individual product information with details and CTA button
 * Props: product object containing product details
 */
const ProductCard = ({ product }) => {
  return (
    <div className="card-shadow bg-white overflow-hidden">
      {/* Product Image/Icon */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center text-6xl">
        {product.image}
      </div>

      {/* Product Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-fire-dark">{product.name}</h3>
          <span className="bg-fire-red text-white px-2 py-1 rounded text-xs font-semibold">
            {product.type}
          </span>
        </div>

        {/* Capacity */}
        <p className="text-gray-600 font-semibold mb-3">{product.capacity}</p>

        {/* Usage Area */}
        <div className="mb-3">
          <p className="text-gray-600 text-sm mb-1 font-medium">Usage Area:</p>
          <p className="text-gray-700 text-sm">{product.usageArea}</p>
        </div>

        {/* Standards */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-1 font-medium">Standards:</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-xs" />
            <p className="text-gray-700 text-sm">{product.standards}</p>
          </div>
        </div>

        {/* Price */}
        <div className="border-t pt-4 mb-4">
          <p className="text-2xl font-bold text-fire-red">{product.price}</p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button className="btn-primary text-sm w-full">Get Quote</button>
          <button className="btn-outline text-sm w-full">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
