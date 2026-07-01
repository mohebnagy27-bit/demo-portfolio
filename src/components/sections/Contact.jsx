import { useState } from "react";
import Button from "../ui/Button";
import FormField from "../ui/FormField";

const CONTACT_INFO = [
  { label: "Email", value: "hello@studio.com" },
  { label: "Phone", value: "+1 (555) 123-4567" },
  { label: "Location", value: "New York, NY" },
  { label: "Working Hours", value: "Mon – Fri, 9am – 6pm" },
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder: no backend or email service wired up yet.
  };

  return (
    <section id="contact" className="py-section">
      <div className="container-custom">
        <span className="text-subheading">Contact</span>
        <h2 className="heading-section mt-4 max-w-2xl">Let's Create Something Together</h2>
        <p className="text-body mt-6 max-w-2xl">
          Have a project in mind or simply want to say hello? Reach out and
          we'll get back to you as soon as possible.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            {CONTACT_INFO.map((item) => (
              <div key={item.label}>
                <p className="text-small">{item.label}</p>
                <p className="font-display mt-1 text-lg text-charcoal">{item.value}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                id="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <FormField
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <FormField
              id="subject"
              label="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <FormField
              id="message"
              label="Message"
              as="textarea"
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="primary" aria-label="Send Message" className="sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;