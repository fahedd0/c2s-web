import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import CarIcon from '../assets/CarIns.png';
import { Shield, Car, CreditCard, Clock, CheckSquare, Wrench } from 'lucide-react';

const MotorInsurance = () => {
  const features = [
    {
      icon: <Car className="h-6 w-6 text-blue-500" />,
      title: "Coverage Options",
      description: "Choose from Third Party Liability (TPL) or comprehensive full-risk insurance options tailored to your vehicle needs."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Multi-Provider Comparison",
      description: "Compare quotes from multiple trusted insurance providers across the UAE in real-time on a single platform."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      title: "Competitive Premiums",
      description: "Access exclusive online discounts and seasonal offers from top insurance partners for optimal value."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Instant Policy Issuance",
      description: "Receive your policy documents within minutes of purchase with our streamlined digital process."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "24/7 Roadside Assistance",
      description: "Get help whenever you need it with included roadside assistance services for emergencies and breakdowns."
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-blue-500" />,
      title: "Agency Repair Options",
      description: "Choose between agency or non-agency repair options to suit your preferences and budget requirements."
    }
  ];

  const benefits = [
    {
      title: "Time-Saving Comparison",
      description: "No need to visit multiple websites or make phone calls - compare all available options in one place with complete transparency."
    },
    {
      title: "Informed Decision Making",
      description: "Make confident choices based on side-by-side comparisons of coverage details, pricing, benefits, and policy terms."
    },
    {
      title: "Vehicle-Specific Solutions",
      description: "Find policies tailored to your specific vehicle type - whether it's a sedan, SUV, motorcycle, or commercial vehicle."
    },
    {
      title: "Simplified Documentation",
      description: "Store all your insurance documents digitally in one secure place for easy access and management, with convenient renewal reminders."
    }
  ];

  const faqs = [
    {
      question: "What's the difference between TPL and comprehensive motor insurance?",
      answer: "Third Party Liability (TPL) insurance is the minimum legal requirement in the UAE and covers damages you cause to other people's property or injuries to third parties. Comprehensive insurance includes TPL coverage plus protection for your own vehicle against accidents, theft, fire, and natural disasters."
    },
    {
      question: "How quickly can I get my motor insurance policy?",
      answer: "With our digital platform, most policies are issued instantly after payment is confirmed. You'll receive your digital insurance certificate immediately, which is valid for driving and registration purposes."
    },
    {
      question: "What factors affect my motor insurance premium?",
      answer: "Several factors influence your premium, including your vehicle's make, model, year, and value; your driving history and claims record; your age and driving experience; and optional coverage add-ons you select. Our comparison tool helps you understand how these factors impact pricing."
    },
    {
      question: "Can I transfer my no-claims discount from another insurer?",
      answer: "Yes, most insurance providers recognize no-claims discounts from other companies. You'll typically need to provide proof of your claims-free period from your previous insurer to benefit from continued discounts."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Motor Insurance Solutions"
      description="Expand your reach by offering customers a seamless online experience for motor insurance policies. Our platform enables you to provide TPL and full risk coverage with attractive discounts and rewards while maintaining the highest security standards."
      icon={CarIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default MotorInsurance;