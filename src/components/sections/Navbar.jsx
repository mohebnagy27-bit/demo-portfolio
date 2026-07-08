import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const menuId = useRef("mobile-menu").current;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/95 shadow-sm backdrop-blur-none" : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex h-20 items-center justify-between">
        <a href="#hero" className="font-display text-xl font-medium tracking-tight text-charcoal">
          Atelier
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeId === link.id
                    ? "text-accent"
                    : "text-charcoal-2 hover:text-charcoal"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="font-display text-xl font-medium tracking-tight text-charcoal">
          {/* <Button variant="primary" aria-label="Let's Talk" className="px-6 py-2.5">
            Let's Talk
          </Button> */}
          Atelier

        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-charcoal transition-transform duration-200 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-charcoal transition-opacity duration-200 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-charcoal transition-transform duration-200 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id={menuId}
        className={`overflow-hidden bg-cream transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-96 border-t border-graylight" : "max-h-0"
        }`}
      >
        <ul className="container-custom flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-lg px-4 py-3.5 text-base font-medium transition-colors duration-200 ${
                  activeId === link.id
                    ? "text-accent"
                    : "text-charcoal-2 hover:bg-offwhite hover:text-charcoal"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-4 pt-2">
            <Button
              variant="primary"
              aria-label="Let's Talk"
              onClick={() => setIsMenuOpen(false)}
              className="w-full"
            >
              Let's Talk
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;