import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import PlaneIcon from '../assets/TravelIns.png';
import { Plane, ShieldCheck, Stethoscope, Clock, Briefcase, Globe } from 'lucide-react';

const TravelInsurance = () => {
  const features = [
    {
      icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
      title: "Medical Emergency Coverage",
      description: "Comprehensive coverage for medical emergencies abroad, including hospitalization, emergency care, and medical evacuation."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Trip Cancellation Protection",
      description: "Reimbursement for non-refundable trip costs if you need to cancel due to covered reasons like illness or emergencies."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-blue-500" />,
      title: "Baggage Protection",
      description: "Coverage for lost, damaged, or delayed baggage, ensuring you're compensated for essential items and personal belongings."
    },
    {
      icon: <Plane className="h-6 w-6 text-blue-500" />,
      title: "Flight Delay Compensation",
      description: "Financial assistance for accommodation and meals in case of significant flight delays or cancellations."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
      title: "COVID-19 Coverage",
      description: "Protection for COVID-related medical expenses and trip disruptions, providing peace of mind during pandemic travel."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "24/7 Global Assistance",
      description: "Round-the-clock support services including emergency assistance, travel advice, and concierge services worldwide."
    }
  ];

  const benefits = [
    {
      title: "Personalized Trip Protection",
      description: "Easily find and compare policies tailored to your specific trip duration, destination, and activities with instant quotes from multiple providers."
    },
    {
      title: "Flexible Coverage Options",
      description: "Choose from single-trip or annual multi-trip plans with optional add-ons for high-risk activities, winter sports, or pre-existing conditions."
    },
    {
      title: "Instant Documentation",
      description: "Purchase your policy in minutes with immediate confirmation and digital access to all necessary documents for visa applications or travel requirements."
    },
    {
      title: "Family-Friendly Plans",
      description: "Special rates and comprehensive coverage options for families traveling together, ensuring everyone is protected on your journey."
    }
  ];

  const faqs = [
    {
      question: "When should I purchase travel insurance?",
      answer: "It's best to purchase travel insurance as soon as you book your trip. This maximizes your coverage period for trip cancellation and allows you to benefit from coverage before your departure date."
    },
    {
      question: "Does travel insurance cover adventure activities?",
      answer: "Basic travel insurance typically covers standard tourist activities. For adventure sports, extreme activities, or high-altitude trekking, you may need to purchase additional coverage or specific add-ons offered by our insurance partners."
    },
    {
      question: "How do I make a claim while traveling abroad?",
      answer: "Our partner insurers offer multiple claim submission methods including mobile apps, online portals, and 24/7 emergency assistance lines. Most policies require you to notify the insurer as soon as possible after an incident and provide supporting documentation."
    },
    {
      question: "Are pre-existing medical conditions covered?",
      answer: "Coverage for pre-existing conditions varies by policy and provider. Some insurers offer add-on coverage for stable pre-existing conditions, while others may exclude them entirely. It's important to declare all conditions when purchasing your policy."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Travel Insurance Solutions"
      description="Offer worry-free travel experiences with our customizable travel insurance packages. Cover medical emergencies, trip cancellations, lost luggage, and more through our secure and user-friendly digital platform."
      icon={PlaneIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default TravelInsurance;