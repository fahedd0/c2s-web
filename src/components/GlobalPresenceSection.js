import React from 'react';
import { Globe } from 'lucide-react';

const GlobalPresenceSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Global Presence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click2Secure has offices and support teams around the world to serve our global clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm reveal" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Dubai HQ</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Street<br />
              Umm Al Quwain<br />
              UAE
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> +1 (123) 456-7890<br />
              <span className="font-medium">Email:</span> 1@click2secure.me
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm reveal" style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Abu Dhabi Branch</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Street<br />
              Abu Dhabi<br />
              UAE
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> +44 20 1234 5678<br />
              <span className="font-medium">Email:</span> 2@click2secure.me
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm reveal" style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Ras Al Khaimah Office</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Street<br />
              Ras Al Khaima<br />
              UAE
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> +65 6123 4567<br />
              <span className="font-medium">Email:</span> 3@click2secure.me
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;