import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error("❌ Failed to load services:", err));
  }, []);

  return (
    <div className="bg-white min-h-screen font-jetbrains text-gray-800">
      {/* Hero Section */}
      <header className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Encreage: Engineering Clarity
        </h1>
        <p className="text-lg text-gray-600">
          A team of engineers offering Cloud, Software, and Strategic solutions to help businesses scale.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
          {services.length > 0 ? (
            services.map((service, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.SERVICE_NAME}</h3>
                <p className="text-gray-600 text-sm">{service.SERVICE_DESC}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">Loading services...</p>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <footer id="contact" className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Build Something Great</h2>
        <p className="text-gray-600 mb-6">
          Contact us to collaborate on your next project or consult on your tech strategy.
        </p>
        <a
          href="mailto:team@encreage.com"
          className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Email Us
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
