import { motion } from "framer-motion";
import { fadeUpVariants, sectionViewport } from "../../lib/motionVariants";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
];

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-graylight bg-offwhite"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={fadeUpVariants}
    >
      <div className="container-custom flex flex-col items-center gap-8 py-12 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="font-display text-lg font-medium text-charcoal">Atelier</p>
          <p className="text-small mt-1">Crafting timeless products with care.</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-small transition-colors duration-200 hover:text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-small">© 2026 Atelier. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;