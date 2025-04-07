import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import HomeIcon from '../assets/HomeIns.png';
import { Home, Shield, Umbrella, Wrench, Bell, CreditCard } from 'lucide-react';

const HomeInsurance = () => {
  const features = [
    {
      icon: <Home className="h-6 w-6 text-blue-500" />,
      title: "Property Coverage",
      description: "Complete protection for your building structure against fire, water damage, and natural disasters."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Contents Protection",
      description: "Coverage for furniture, electronics, and valuable personal belongings against theft and accidental damage."
    },
    {
      icon: <Umbrella className="h-6 w-6 text-blue-500" />,
      title: "Liability Coverage",
      description: "Protection against tenant liability and legal expenses if someone is injured on your property."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Emergency Services",
      description: "24/7 access to emergency home services for plumbing, electrical, or locksmith issues."
    },
    {
      icon: <Bell className="h-6 w-6 text-blue-500" />,
      title: "Alternative Accommodation",
      description: "Coverage for temporary housing expenses if your home becomes uninhabitable due to a covered event."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      title: "Flexible Payment Options",
      description: "Choose from various payment plans with exclusive online discounts and competitive premiums."
    }
  ];

  const benefits = [
    {
      title: "Simplified Shopping Experience",
      description: "Compare multiple quotes side by side in a user-friendly dashboard, eliminating the need to visit multiple websites."
    },
    {
      title: "Instant Policy Issuance",
      description: "Purchase your policy online in minutes and receive instant confirmation with digital access to all your documents."
    },
    {
      title: "Customizable Coverage",
      description: "Filter and sort insurance options based on your specific needs and budget, ensuring you get exactly what you need."
    },
    {
      title: "Optional Add-ons",
      description: "Enhance your protection with add-ons like worldwide personal possessions cover or specialized high-value item coverage."
    }
  ];

  const faqs = [
    {
      question: "Does home insurance cover both owned and rented properties?",
      answer: "Yes, we offer different types of home insurance for homeowners and tenants. Homeowners can get building and contents coverage, while tenants typically need contents insurance to protect their personal belongings."
    },
    {
      question: "Are natural disasters covered under standard home insurance?",
      answer: "Most of our policies cover damage from fire, storms, and water leaks. Coverage for specific natural disasters like floods or earthquakes may vary by policy and provider. We recommend checking the specific coverage details when comparing policies."
    },
    {
      question: "How do I make a claim if my home is damaged?",
      answer: "Claims can be submitted directly through your insurer's website or app. You'll need to provide details of the incident, photos of the damage, and any relevant documentation. Our partner insurers typically have 24/7 claims assistance available."
    },
    {
      question: "Can I insure specific high-value items separately?",
      answer: "Yes, most of our partners offer options to schedule high-value items like jewelry, art, or collectibles separately on your policy to ensure they're fully covered at their appraised value."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Home Insurance Solutions"
      description="Stay competitive by enabling customers to purchase home insurance policies online. Our advanced technology helps you streamline the policy purchasing process while offering attractive discounts and rewards in a secure environment."
      icon={HomeIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default HomeInsurance;