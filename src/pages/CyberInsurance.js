import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import ShieldIcon from '../assets/CyberIns.png';
import { ShieldAlert, Lock, Server, GanttChart, Scale, LifeBuoy } from 'lucide-react';

const CyberInsurance = () => {
  // Define the content specific to cyber insurance
  const features = [
    {
      icon: <ShieldAlert className="h-6 w-6 text-blue-500" />,
      title: "Data Breach Protection",
      description: "Coverage for costs associated with data breaches, including customer notification, credit monitoring, and recovery services."
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-500" />,
      title: "Ransomware Coverage",
      description: "Protection against ransomware attacks with coverage for ransom payments, system restoration, and business interruption."
    },
    {
      icon: <Server className="h-6 w-6 text-blue-500" />,
      title: "Forensic Investigation",
      description: "Coverage for professional digital forensic services to investigate breaches, determine causes, and prevent future incidents."
    },
    {
      icon: <Scale className="h-6 w-6 text-blue-500" />,
      title: "Legal Expense Coverage",
      description: "Financial protection for legal fees, regulatory fines, and penalties resulting from cyber incidents and data breaches."
    },
    {
      icon: <GanttChart className="h-6 w-6 text-blue-500" />,
      title: "Business Interruption",
      description: "Compensation for lost income and extra expenses during system downtime caused by cyber attacks."
    },
    {
      icon: <LifeBuoy className="h-6 w-6 text-blue-500" />,
      title: "Incident Response Team",
      description: "Access to cyber security experts who provide immediate assistance during cyber incidents to minimize damage."
    }
  ];

  const benefits = [
    {
      title: "Enterprise-Grade Protection",
      description: "Access to comprehensive cyber protection typically available only to large enterprises, now tailored for businesses of all sizes."
    },
    {
      title: "User-Friendly Risk Assessment",
      description: "Simple process to evaluate your digital footprint and cyber risk exposure without requiring deep technical expertise."
    },
    {
      title: "Transparent Policy Comparison",
      description: "Compare features, pricing, response times, and policy terms from multiple insurers in one easy-to-use interface."
    },
    {
      title: "Preventive Services",
      description: "Optional access to risk assessments, employee training, and digital hygiene tools to strengthen your cyber resilience."
    }
  ];

  const faqs = [
    {
      question: "Who needs cyber insurance?",
      answer: "Any business or individual who stores sensitive data, conducts business online, uses cloud services, or could face financial loss from a cyber attack would benefit from cyber insurance. This includes small businesses, freelancers, and enterprises across all industries."
    },
    {
      question: "What types of cyber attacks are covered?",
      answer: "Our cyber insurance policies typically cover a wide range of incidents including data breaches, ransomware attacks, phishing scams, business email compromise, cyber extortion, identity theft, and financial fraud. Coverage specifics may vary by policy."
    },
    {
      question: "How quickly can I get help if I experience a cyber attack?",
      answer: "Most of our partner insurers offer 24/7 incident response services with dedicated hotlines. You can typically get initial guidance within minutes of reporting an incident and have experts working on your case within hours."
    },
    {
      question: "Does cyber insurance cover losses from social engineering attacks?",
      answer: "Many policies do cover losses from social engineering attacks, such as when an employee is tricked into transferring funds or sharing sensitive information. However, coverage limits and requirements for security measures may vary by insurer."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Cyber Insurance Solutions"
      description="Meet the growing demand for cyber insurance with our state-of-the-art platform. Offer comprehensive coverage, competitive pricing, and superior security to stand out in a rapidly evolving market."
      icon={ShieldIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default CyberInsurance;