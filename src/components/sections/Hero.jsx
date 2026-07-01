import Button from "../ui/Button";

const Hero = () => {
  return (
    <section id="hero" className="bg-linear-to-b from-white to-offwhite">
      <div className="container-custom grid grid-cols-1 items-center gap-12 py-section lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-col items-start text-left">
          <span className="text-subheading">Crafting Timeless Design</span>

          <h1 className="heading-display mt-6">
            Premium Products,
            <br />
            Presented Beautifully
          </h1>

          <p className="text-body mt-6 max-w-md">
            A curated showcase of carefully crafted products, designed to
            highlight quality, detail, and craftsmanship in every piece.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row">
            <Button variant="primary" aria-label="View Products" className="w-full sm:w-auto">
              View Products
            </Button>
            <Button variant="secondary" aria-label="Contact Me" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[85%] w-[85%] rounded-3xl bg-graylight" aria-hidden="true" />
          <div
            role="img"
            aria-label="Placeholder portrait of the product creator"
            className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-offwhite shadow-xl"
          >
            <span className="text-small text-graymid">Profile Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;