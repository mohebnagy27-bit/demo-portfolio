const StatCard = ({ value, label }) => {
  return (
    <div className="rounded-2xl border border-graylight bg-white p-6">
      <p className="font-display text-3xl font-medium text-charcoal">{value}</p>
      <p className="text-small mt-2">{label}</p>
    </div>
  );
};

export default StatCard;