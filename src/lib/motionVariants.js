export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const sectionViewport = { once: true, amount: 0.2 };

export const heroContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const heroItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const cardHoverVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } },
};

export const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.3, ease: "easeOut" } },
};