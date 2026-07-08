import { motion } from "framer-motion";
import { cardHoverVariants, imageHoverVariants } from "../../lib/motionVariants";

const ProductCard = ({ title, category, coverImage, shortDescription, onSelect }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      variants={cardHoverVariants}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-graylight bg-white transition-shadow duration-200 hover:border-graymid hover:shadow-md"
    >
      <div className="aspect-4/3 overflow-hidden bg-offwhite">
        <motion.img
          variants={imageHoverVariants}
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-small text-accent">{category}</span>
        <h3 className="font-display mt-2 text-lg font-medium text-charcoal">
          {title}
        </h3>
        <p className="text-small mt-2 line-clamp-3">{shortDescription}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;