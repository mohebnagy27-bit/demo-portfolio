const ServiceCard = ({ title, description }) => {
  return (
    <div className="rounded-2xl border border-graylight bg-white p-6">
      <h3 className="font-display text-lg font-medium text-charcoal">{title}</h3>
      <p className="text-small mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;