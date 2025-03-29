import React from 'react';
// Import the card logos
import visaLogo from '../assets/visa.png';
import mastercardLogo from '../assets/mastercard.png';
import unionpayLogo from '../assets/unionpay.png';

const PaymentMethodsSection = () => {
  const paymentCards = [
    {
      name: "MasterCard",
      logo: mastercardLogo,
      alt: "MasterCard"
    },
    {
      name: "UnionPay",
      logo: unionpayLogo,
      alt: "UnionPay"
    },
    {
      name: "Visa",
      logo: visaLogo,
      alt: "Visa"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-gray-100 text-gray-800 text-sm font-medium py-2 px-5 rounded-full inline-block mb-4">
            ACCEPTED PAYMENT CARDS
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">We accept the following cards:</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 mb-10">
          {paymentCards.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={card.logo} 
                alt={card.alt} 
                className="h-12 md:h-16" 
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;