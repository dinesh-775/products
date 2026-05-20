function Product({ product }) {
  return (
    <div
      className="relative rounded-2xl p-[2px]
      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
      hover:from-cyan-300 hover:via-blue-400 hover:to-pink-500
      transition-all duration-500
      shadow-[0_0_20px_rgba(34,211,238,0.4)]
      hover:shadow-[0_0_45px_rgba(34,211,238,0.9)]"
    >
      <div className="bg-slate-900 rounded-2xl overflow-hidden h-full hover:-translate-y-1 transition-all duration-500">

        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold text-white">
            {product.name}
          </h2>

          <p className="text-sm text-gray-400">
            Brand: {product.brand}
          </p>

          <p className="text-sm text-gray-300 line-clamp-3">
            {product.description}
          </p>

          <p className="text-lg font-bold text-cyan-400">
            ${product.price}
          </p>

          <button className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-xl hover:from-blue-500 hover:to-purple-600 transition duration-300">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default Product;