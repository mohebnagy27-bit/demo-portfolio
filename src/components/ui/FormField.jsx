const FormField = ({ id, label, type = "text", as = "input", ...props }) => {
  const baseClass =
    "w-full rounded-xl border border-graylight bg-white px-4 py-3 text-sm text-charcoal transition-colors duration-200 placeholder:text-graymid focus:outline-hidden focus:border-charcoal";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-small font-medium text-charcoal">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea id={id} name={id} rows={5} className={baseClass} {...props} />
      ) : (
        <input id={id} name={id} type={type} className={baseClass} {...props} />
      )}
    </div>
  );
};

export default FormField;