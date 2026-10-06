import { motion } from "framer-motion";
import Button from "../ui/Button";
import { heroContainerVariants, heroItemVariants } from "../../lib/motionVariants";
import profileImage from "../../assets/1783545922033.jpg";

const Hero = () => {
  return (
    <section id="hero" className="bg-linear-to-b from-white to-offwhite">
      <motion.div
        className="container-custom grid grid-cols-1 items-center gap-12 py-section lg:grid-cols-2 lg:gap-16"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariants}
      >
        <div className="flex flex-col items-start text-left">
          <motion.span variants={heroItemVariants} className="text-subheading">
            Crafting Timeless Design
          </motion.span>

          <motion.h1 variants={heroItemVariants} className="heading-display mt-6">
            Premium Products,
            <br />
            Presented with Purpose.
          </motion.h1>

          <motion.p variants={heroItemVariants} className="text-body mt-6 max-w-md">
            A curated showcase of carefully crafted products, designed to
            highlight quality, detail, and craftsmanship in every piece.
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="mt-10 flex w-full flex-col gap-4 sm:flex-row"
          >
            <Button  variant="primary" aria-label="View Products" className="w-full sm:w-auto">
              <a
                href="#products"
              >
                View Products
              </a>
            </Button>
            <Button variant="secondary" aria-label="Contact Me" className="w-full sm:w-auto">
               <a
                href="#contact"
              >
              Contact Me
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div variants={heroItemVariants} className="relative flex items-center justify-center">
          <div className="absolute h-[85%] w-[85%] rounded-3xl bg-graylight" aria-hidden="true" />
          <div
            role="img"
            aria-label="Placeholder portrait of the product creator"
            className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-offwhite shadow-xl"
          >
            {/* <span className="text-small text-graymid">Profile Image Placeholder</span> */}
            <img src={profileImage} alt="Profile Image" className="h-full w-full object-cover rounded-3xl" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;