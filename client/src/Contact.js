import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [showToast, setShowToast] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setVisible(true), 50);
    setTimeout(() => setVisible(false), 3500);
    setTimeout(() => setShowToast(false), 4000);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <main className="min-h-screen px-4 bg-[#f5ebe0] font-playfair relative">
      <section className="py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-neutral-900 mb-4">Contact Us</h1>
        <p className="text-xl text-neutral-700">
          We're always here to help you find your perfect pet companion.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16 grid lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-neutral-900">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-lg mb-2 text-neutral-700">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  required/>
              </div>
              <div>
                <label className="block text-lg mb-2 text-neutral-700">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  required/>
              </div>
            </div>

            <div>
              <label className="block text-lg mb-2 text-neutral-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required/>
            </div>

            <div>
              <label className="block text-lg mb-2 text-neutral-700">Subject</label>
              <select
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="adoption">Adoption Question</option>
                <option value="shelter">Shelter Partnership</option>
                <option value="technical">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-lg mb-2 text-neutral-700">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
                value={formData.message}
                placeholder="Let us know how we can help..."
                onChange={(e) => handleChange("message", e.target.value)}
                required></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-neutral-900 text-white py-3 rounded-md hover:bg-neutral-700 transition">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-3xl font-bold mb-4 text-neutral-900">Get in Touch</h3>
            <p className="mb-4 text-neutral-700">
              Do you have questions about pet adoption, need help using our platform, or simply want to provide feedback? We'd love to hear from you!
            </p>

            <div className="space-y-6 text-neutral-700">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-neutral-800 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>info@pawfectmatch.com</p>
                  <small>We typically respond within 24 hours</small>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl text-neutral-800 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>(123) 456-7890</p>
                  <small>Mon–Fri: 9AM–6PM EST <br /> Sat–Sun: 10AM–4PM EST</small>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-r from-neutral-800 to-neutral-900 text-white">
            <h3 className="text-xl font-bold mb-2">Emergency Pet Resources</h3>
            <p className="text-neutral-200 mb-3">Need immediate help?</p>
            <ul className="space-y-1 text-sm">
              <li>ASPCA Animal Poison Control Center: 1-888-426-4435</li>
              <li>Pet Poison Helpline: 1-855-764-7661</li>
            </ul>
          </div>

          <div className="p-8 rounded-lg bg-white shadow text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Follow Us</h3>
            <div className="flex justify-center space-x-4 text-neutral-800 text-xl">
              <a href="https://www.facebook.com/Petfinder/" target="_blank" rel="noreferrer"><FaFacebookF className="hover:text-blue-600 transition" /></a>
              <a href="https://x.com/petfinder?lang=en" target="_blank" rel="noreferrer"><FaTwitter className="hover:text-sky-500 transition" /></a>
              <a href="https://www.instagram.com/petfinder/?hl=en" target="_blank" rel="noreferrer"><FaInstagram className="hover:text-pink-500 transition" /></a>
              <a href="https://www.youtube.com/@petfinder3903" target="_blank" rel="noreferrer"><FaYoutube className="hover:text-red-600 transition" /></a>
            </div>
          </div>
        </div>
      </div>
      
      {showToast && (
        <div
          className={`fixed bottom-6 right-6 px-8 py-6 bg-neutral-900 text-white rounded-lg shadow-xl z-50 transition-all duration-500 ease-in-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{ maxWidth: '350px' }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-lg">Message Sent</p>
              <p className="text-base text-neutral-300">
                Thanks for reaching out. We’ll get back to you soon.
              </p>
            </div>
            <button
              onClick={() => {
                setVisible(false);
                setTimeout(() => setShowToast(false), 500);
              }}
              className="ml-6 text-2xl text-neutral-400 hover:text-white transition leading-none"
              aria-label="Dismiss message"
            >
              &times;
            </button>
          </div>
        </div>
      )}



    </main>
  );
}

export default Contact;