import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);

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
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-16 text-center px-4">
        <h1 className="text-5xl font-bold text-neutral-900 mb-4">Contact Us</h1>
        <p className="text-xl text-neutral-700">
          We're always here to help you find your perfect pet companion.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        <div className="bg-white p-12 rounded-lg shadow-lg">
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
                  required />
              </div>
              <div>
                <label className="block text-lg mb-2 text-neutral-700">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  required />
              </div>
            </div>

            <div>
              <label className="block text-lg mb-2 text-neutral-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required />
            </div>

            <div>
              <label className="block text-lg mb-2 text-neutral-700">Subject</label>
              <select
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                required >
                <option value="">Subject</option>
                <option value="general">General Inquiry</option>
                <option value="adoption">Adoption Help</option>
                <option value="technical">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="volunteer">Volunteer</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-lg mb-2 text-neutral-700">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-neutral-900 text-white py-3 rounded-md hover:bg-neutral-700 transition">
              Send Message
            </button>
          </form> 
        </div>
      </div>

      {showToast && (
      <div className="fixed bottom-6 right-6 bg-neutral-800 text-white px-5 py-4 rounded-md shadow-lg transition-opacity duration-500 z-50 animate-fade-in-out">
        <p className="font-semibold text-white">Message Sent</p>
        <p className="text-sm text-neutral-300">Thanks for reaching out. We’ll get back to you soon.</p>
      </div>
    )}

    </main>
  );
}

export default Contact;