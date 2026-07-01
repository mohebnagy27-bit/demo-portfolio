import StatCard from "../ui/StatCard";
import ServiceCard from "../ui/ServiceCard";

const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "80+", label: "Happy Clients" },
  { value: "Product Design", label: "Main Specialization" },
];

const SERVICES = [
  {
    title: "Product Design",
    description: "Thoughtful, detail-driven design for products that need to feel premium.",
  },
  {
    title: "Brand Identity",
    description: "Creating cohesive visual identities that communicate quality and trust.",
  },
  {
    title: "Art Direction",
    description: "Guiding the visual language of a project from concept to final presentation.",
  },
  {
    title: "Consulting",
    description: "Strategic guidance for teams looking to elevate their creative output.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-subheading">About</span>
            <h2 className="heading-section mt-4">
              Dedicated to Thoughtful, Timeless Craft
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <p className="text-body">
                For over a decade, the studio has focused on creating products
                and experiences that favor clarity over noise, and substance
                over trend.
              </p>
              <p className="text-body">
                Every project begins with a simple question: what does this
                need to become to feel effortless in someone's hands? The
                answer shapes every material, proportion, and detail that
                follows.
              </p>
              <p className="text-body">
                The result is work that feels considered, refined, and built
                to last well beyond the moment it was made.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;