import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import CogIcon from '../assets/EngIns.png';
import { HardHat, Building, Wrench, Clock, Shield, Construction } from 'lucide-react';

const EngineeringInsurance = () => {
  // Define the content specific to engineering insurance
  const features = [
    {
      icon: <Construction className="h-6 w-6 text-blue-500" />,
      title: "Contractors' All Risks (CAR)",
      description: "Comprehensive coverage for civil engineering projects protecting against damage to property, materials, and third-party liabilities."
    },
    {
      icon: <HardHat className="h-6 w-6 text-blue-500" />,
      title: "Erection All Risks (EAR)",
      description: "Specialized protection for mechanical and electrical installation projects, covering equipment during erection and testing phases."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Machinery Breakdown",
      description: "Coverage for sudden and unforeseen damage to machinery, including repair costs and related expenses during operation."
    },
    {
      icon: <Building className="h-6 w-6 text-blue-500" />,
      title: "Electronic Equipment Protection",
      description: "Safeguards for sensitive electronic equipment against electrical, mechanical, and physical damage during installation and use."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Delayed Startup Coverage",
      description: "Financial protection against project delays caused by insured events, including advanced loss of profit (ALOP) coverage."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Liability Protection",
      description: "Coverage against third-party claims for property damage or bodily injury arising from construction or engineering activities."
    }
  ];

  const benefits = [
    {
      title: "Project-Specific Solutions",
      description: "Tailored insurance options based on your specific project scope, duration, value, and type—from small-scale builds to large industrial works."
    },
    {
      title: "Digital Efficiency",
      description: "Streamlined quote comparison and policy purchasing process without lengthy calls or back-and-forth with multiple agents."
    },
    {
      title: "Comprehensive Coverage",
      description: "Protection for structures, machinery, third-party liabilities, on-site accidents, and damage during construction or installation phases."
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure your projects meet all insurance requirements mandated by contracts, regulations, and financing institutions with proper documentation."
    }
  ];

  const faqs = [
    {
      question: "What is the difference between CAR and EAR insurance?",
      answer: "Contractors' All Risks (CAR) insurance primarily covers civil engineering and building construction projects. Erection All Risks (EAR) focuses on machinery installation, electrical systems, and mechanical erection projects. CAR typically involves more structural work, while EAR involves more technical equipment assembly and testing."
    },
    {
      question: "Can I get coverage for an ongoing project?",
      answer: "While it's always best to secure insurance before a project begins, some insurers do offer coverage for ongoing projects after a thorough risk assessment. There may be exclusions for existing damage or a waiting period before coverage takes effect."
    },
    {
      question: "Does engineering insurance cover design errors?",
      answer: "Standard engineering insurance typically excludes losses resulting from faulty design or specifications. However, some policies offer Design Error Extension or Professional Indemnity coverage as an add-on to protect against design flaws or professional mistakes."
    },
    {
      question: "How long does the coverage last?",
      answer: "Engineering insurance policies typically cover the entire project period, from mobilization to completion. Many policies also include an extended maintenance period (usually 12 months) after project handover to cover defects that appear during this time."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Engineering Insurance Solutions"
      description="Provide specialized coverage for engineering projects, machinery, and equipment. Our platform enables comprehensive risk assessment and policy management for contractors, developers, and engineering firms."
      icon={CogIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default EngineeringInsurance;