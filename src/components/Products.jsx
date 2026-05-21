import { useState } from "react";
import Product from "./Product";

function Products() {
  const [search, setSearch] = useState("");

  const products = [
    {
      productId: 1,
      name: "AirPods Pro",
      price: 249,
      brand: "Apple",
      description:
        "Active noise cancellation with adaptive transparency mode and spatial audio for immersive sound.",
      image:
        "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg.landing-big_2x.jpg",
    },
    {
      productId: 2,
      name: "Galaxy Watch 6",
      price: 299,
      brand: "Samsung",
      description:
        "Advanced health monitoring with BioActive sensor, sleep coaching and 40 hour battery life.",
      image:
        "https://images.samsung.com/in/galaxy-watch6-classic/feature/galaxy-watch6-classic-banner-watch6-mo.jpg",
    },
    {
      productId: 3,
      name: "MX Master 3S",
      price: 99,
      brand: "Logitech",
      description:
        "Ultra-fast scrolling, ergonomic design and near-silent clicks for all-day productivity.",
      image:
        "https://m.media-amazon.com/images/I/618IJzC-fFL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      productId: 4,
      name: "MacBook Air M3",
      price: 1299,
      brand: "Apple",
      description:
        "Supercharged by M3 chip with 18-hour battery life and a stunning Liquid Retina display.",
      image:
        "https://www.macworld.com/wp-content/uploads/2024/03/macbook-air-m3-2.jpg?quality=50&strip=all",
    },
    {
      productId: 5,
      name: "Sony WH-1000XM5",
      price: 349,
      brand: "Sony",
      description:
        "Industry-leading noise cancellation with 30-hour battery and crystal clear hands-free calling.",
      image:
        "https://headphonesaddict.com/wp-content/uploads/2023/09/Sony-WH-1000XM5-in-a-table.jpg",
    },
    {
      productId: 6,
      name: "iPad Mini 6",
      price: 499,
      brand: "Apple",
      description:
        "Portable powerhouse with A15 Bionic chip, USB-C connectivity and all-day battery life.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/iPad_mini_6.jpg?size=690:388",
    },
    {
      productId: 7,
      name: "Mechanical Keyboard K3",
      price: 89,
      brand: "Keychron",
      description:
        "Compact wireless mechanical keyboard with RGB backlight and multi-device Bluetooth support.",
      image:
        "https://m.media-amazon.com/images/I/61x3nRatR9L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      productId: 8,
      name: 'Dell UltraSharp 27"',
      price: 579,
      brand: "Dell",
      description:
        "4K IPS display with factory-calibrated color accuracy and USB-C 90W power delivery.",
      image:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2724de/media-gallery/monitor-ultrasharp-u2724de-gy-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=5000&hei=5000&qlt=100,1&resMode=sharp2&size=5000,5000&chrss=full&imwidth=5000",
    },
    {
      productId: 9,
      name: "Pixel 8 Pro",
      price: 999,
      brand: "Google",
      description:
        "Google AI built-in with pro-level camera system, 7 years of updates and real-time call translation.",
      image:
        "https://i.insider.com/65cfbf246fcb546d2d50f812?width=1200&format=jpeg",
    },
    {
      productId: 10,
      name: "Portable SSD T9",
      price: 119,
      brand: "Samsung",
      description:
        "Blazing-fast 2000MB/s transfer speeds in a compact, shock-resistant portable drive.",
      image:
        "https://varietyinfotech.com/wp-content/uploads/2025/07/Samsung-Portable-T9-USB-3.2-Gen2x2-2TB-SSD-Black-5.jpg",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-cyan-400 rounded-2xl w-[400px] bg-slate-900 text-white pl-4 h-12 outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <Product
            key={product.productId}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;