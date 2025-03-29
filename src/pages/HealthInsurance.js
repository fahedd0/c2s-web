import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import HealthIcon from '../assets/HealthIns.png';
import { Heart, Activity, Clock, Shield, Users, Award } from 'lucide-react';

const HealthInsurance = () => {
  // Define the content specific to health insurance
  const features = [
    {
      icon: <Heart className="h-6 w-6 text-blue-500" />,
      title: "Comprehensive Coverage",
      description: "Complete health protection including hospitalization, outpatient care, medications, and specialized treatments."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Family Plans",
      description: "Extend coverage to family members with customizable plans that meet each person's specific health needs."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-500" />,
      title: "Wellness Programs",
      description: "Preventive care benefits including fitness programs, health screenings, and lifestyle coaching."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "24/7 Telemedicine",
      description: "Access to medical professionals around the clock through our secure digital platform."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Maternity Coverage",
      description: "Comprehensive maternity benefits including prenatal care, delivery, and postnatal services."
    },
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: "International Coverage",
      description: "Emergency medical coverage when traveling internationally with direct billing to network hospitals."
    }
  ];

  const benefits = [
    {
      title: "Streamlined Claims Processing",
      description: "Our digital claims submission system reduces processing time by up to 80%, allowing faster reimbursements and less paperwork."
    },
    {
      title: "Personalized Health Management",
      description: "Access to digital health records, appointment scheduling, and medication reminders for better health management."
    },
    {
      title: "Transparent Coverage",
      description: "Clear explanation of benefits with no hidden exclusions, making it easier for customers to understand what's covered."
    },
    {
      title: "Affordable Premiums",
      description: "Our efficient digital processes allow us to offer competitive premiums without compromising on coverage quality."
    }
  ];

  const faqs = [
    {
      question: "Does this health insurance cover pre-existing conditions?",
      answer: "Yes, our health insurance covers pre-existing conditions after a waiting period of 24 months for most conditions. Some specific conditions may have different waiting periods as specified in the policy documents."
    },
    {
      question: "How do I find doctors in your network?",
      answer: "You can easily search for in-network doctors through our mobile app or website. The directory is regularly updated and allows filtering by specialty, location, and languages spoken."
    },
    {
      question: "What is the process for getting prescriptions filled?",
      answer: "You can fill prescriptions at any of our partner pharmacies by showing your digital insurance card. For certain medications, we also offer a home delivery service that can be requested through our app."
    },
    {
      question: "Are mental health services covered?",
      answer: "Yes, our health insurance includes coverage for mental health services including therapy sessions, psychiatric consultations, and certain treatments. The specific coverage limits are detailed in your policy."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Health Insurance Solutions"
      description="Digitally transform your health insurance offerings with customizable coverage options for Dubai & Northern Emirates visa residents. Leverage our platform to provide user-friendly and secure services to a wider audience."
      icon={HealthIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default HealthInsurance;