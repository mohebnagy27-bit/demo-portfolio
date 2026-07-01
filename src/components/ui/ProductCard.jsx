const ProductCard = ({ title, category, coverImage, shortDescription, onSelect }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-graylight bg-white transition-all duration-200 hover:border-graymid hover:shadow-md"
    >
      <div className="aspect-4/3 overflow-hidden bg-offwhite">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-small text-accent">{category}</span>
        <h3 className="font-display mt-2 text-lg font-medium text-charcoal">
          {title}
        </h3>
        <p className="text-small mt-2 line-clamp-3">{shortDescription}</p>
      </div>
    </div>
  );
};

export default ProductCard;