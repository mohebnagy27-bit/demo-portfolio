import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClass = variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;