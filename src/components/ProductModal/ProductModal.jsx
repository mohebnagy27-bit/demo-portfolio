import { useEffect, useRef, useState } from "react";
import ProductGallery from "../ProductGallery/ProductGallery";

const ProductModal = ({ product, onClose }) => {
  const modalRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!product) return;

    setActiveIndex(0);
    previouslyFocusedRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const isVideoSlide = Boolean(product.video) && activeIndex === product.gallery.length;
  const activeCaption = isVideoSlide ? null : product.gallery[activeIndex]?.caption;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 p-6 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        tabIndex={-1}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 outline-hidden sm:p-10"
      >
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Close product details"
            onClick={onClose}
            className="text-small text-charcoal-2 transition-colors duration-200 hover:text-charcoal"
          >
            Close
          </button>
        </div>

        <div className="mt-2">
          <ProductGallery
            gallery={product.gallery}
            video={product.video}
            videoLabel={`${product.title} product video`}
            onSlideChange={setActiveIndex}
          />
          {activeCaption && (
            <p className="text-small mt-3 text-center">{activeCaption}</p>
          )}
        </div>

        <h2 id="product-modal-title" className="heading-section mt-6">
          {product.title}
        </h2>
        <span className="text-small mt-2 inline-block text-accent">
          {product.category}
        </span>
        <p className="text-body mt-4">{product.shortDescription}</p>
      </div>
    </div>
  );
};

export default ProductModal;