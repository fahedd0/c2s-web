import React from 'react';
// import client logo

const TrustedClientsSection = () => {
  const clients = [
    {
      name: "Client1",
      logoText: "Client1"
    },
    {
      name: "Client2",
      logoText: "Client2"
    },
    {
      name: "Client3",
      logoText: "Client3"
    },
    {
      name: "Client4",
      logoText: "Client4"
    },
    {
      name: "Client5",
      logoText: "Client5"
    },
    {
      name: "Client6",
      logoText: "Client6"
    },
    {
      name: "Client7",
      logoText: "Client7"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            TRUSTED BY LEADING COMPANIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Esteemed Clients</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with top-tier enterprises for enhanced document security
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 reveal">
          <p className="text-gray-600 text-center">
            At Click2Secure, we are proud to partner with leading companies that
            recognize the potential of our platform to transform their businesses. Our clients trust us
            to provide exceptional technology solutions and the highest level of support, allowing
            them to remain competitive and meet their customers' evolving needs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 reveal">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* logos */}
              <div className="text-2xl font-bold text-gray-500 p-4 min-w-40 text-center hover:text-blue-600 transition-all duration-300">
                {client.logoText}
              </div>
              <div className="text-sm text-gray-400 mt-2">{client.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 reveal">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:-translate-y-1 shadow-md">
            View all clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedClientsSection;