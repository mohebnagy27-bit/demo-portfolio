import { useState } from "react";
import products from "../../data/products";
import ProductCard from "../ui/ProductCard";
import ProductModal from "../ProductModal/ProductModal";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-section bg-offwhite">
      <div className="container-custom">
        <span className="text-subheading">Products</span>
        <h2 className="heading-section mt-4 max-w-2xl">
          A Curated Selection of Work
        </h2>
        <p className="text-body mt-6 max-w-2xl">
          Each piece is crafted with intention, blending quality materials
          with a refined design sensibility.
        </p>

        {products.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                coverImage={product.coverImage}
                shortDescription={product.shortDescription}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        ) : (
          <p className="text-small mt-16">More products coming soon.</p>
        )}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};

export default Products; 