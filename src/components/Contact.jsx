import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactInfo = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
      <Icon className="text-orange-500 flex-shrink-0" size={20} />
      <span className="text-gray-700">{text}</span>
    </div>
  );

  const SocialLink = ({ href, icon: Icon }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-700 hover:text-orange-500 transition-colors duration-300 p-2"
    >
      <Icon size={24} />
    </a>
  );

  return (
    <div id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-500">
          Get in touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <ContactInfo icon={FaLocationDot} text="Chennai" />
              <ContactInfo icon={FaPhoneAlt} text="8778341217" />
              <ContactInfo icon={FaEnvelope} text="fahadcareer29@gmail.com" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 text-center">Follow on</h3>
              <div className="flex justify-center gap-4 bg-gray-50 p-4 rounded-lg">
                <SocialLink href="https://github.com/fahadcareer" icon={FaGithub} />
                <SocialLink href="https://www.linkedin.com/in/m-mohamed-fahad/" icon={FaLinkedin} />
                <SocialLink href="https://www.instagram.com/itzme_fahad_/" icon={FaInstagram} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-500 text-center mb-6">
                Send a Message
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 h-32 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {success === true && (
                <div className="p-3 bg-green-50 text-green-600 rounded-lg text-center">
                  Message sent successfully!
                </div>
              )}
              {success === false && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-center">
                  Failed to send the message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
