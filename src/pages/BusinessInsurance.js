import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import BriefcaseIcon from '../assets/BusinessIns.png';
import { Building, ShieldCheck, Users, Truck, FileText, Clock } from 'lucide-react';

const BusinessInsurance = () => {
  const features = [
    {
      icon: <Building className="h-6 w-6 text-blue-500" />,
      title: "Property Insurance",
      description: "Comprehensive protection for business premises, equipment, inventory, and assets against fire, theft, and natural disasters."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
      title: "Liability Coverage",
      description: "Protection against claims of bodily injury, property damage, or professional errors and omissions that occur in your business operations."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Employee Protection",
      description: "Coverage options for workers' compensation, employee benefits, and workplace injury claims to safeguard your team."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Business Interruption",
      description: "Financial support for lost income and operating expenses during temporary closures due to covered events."
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      title: "Fleet Insurance",
      description: "Comprehensive or third-party coverage for business vehicles and transportation needs with flexible policy options."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: "Professional Indemnity",
      description: "Protection against claims of negligence, errors, or inadequate work in your professional services and advice."
    }
  ];

  const benefits = [
    {
      title: "Industry-Specific Solutions",
      description: "Tailored insurance packages designed for your specific industry—from tech and retail to construction, hospitality, and professional services."
    },
    {
      title: "Simple Comparison Tools",
      description: "Easily compare key features, policy limits, premiums, and exclusions from multiple insurers to make the most informed decision for your business."
    },
    {
      title: "Scalable Coverage",
      description: "Flexible policies that can grow with your business, allowing you to adjust coverage as your operations expand or change."
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure your business meets all mandatory insurance requirements with proper documentation and verification for licensing and contracts."
    }
  ];

  const faqs = [
    {
      question: "What types of businesses can get coverage through your platform?",
      answer: "Our platform offers insurance solutions for a wide range of businesses including startups, SMEs, and established enterprises across various industries like retail, technology, hospitality, construction, professional services, manufacturing, and more."
    },
    {
      question: "How much business insurance coverage do I need?",
      answer: "Coverage needs depend on factors like your industry, business size, assets, revenue, number of employees, and risk exposure. Our platform helps you assess these factors and compare options that match your specific requirements and budget constraints."
    },
    {
      question: "Can I bundle different types of business insurance?",
      answer: "Yes, many insurers offer comprehensive packages like Business Owner's Policies (BOP) that combine property, liability, and business interruption coverage at a discounted rate. You can also customize additional coverages to create a solution tailored to your needs."
    },
    {
      question: "How quickly can I get proof of insurance for a contract or lease?",
      answer: "With our digital platform, you can receive proof of insurance (Certificate of Insurance) immediately after purchasing a policy. These documents can be downloaded, printed, or electronically shared with clients, landlords, or contractors as needed."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Business Insurance Solutions"
      description="Safeguard businesses with tailored insurance packages covering property, liability, professional indemnity, and business interruption. Our digital solutions streamline commercial coverage with enhanced security and efficiency."
      icon={BriefcaseIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default BusinessInsurance;