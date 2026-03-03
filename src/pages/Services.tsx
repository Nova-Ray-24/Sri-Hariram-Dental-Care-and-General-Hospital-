import React from 'react';
import { motion } from 'motion/react';
import { Activity, Star, ShieldCheck, Heart, Scissors, Baby, Smile, Stethoscope } from 'lucide-react';

interface ServicesProps {
  onOpenModal: () => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
  const services = [
    {
      title: 'Root Canal Treatment',
      desc: 'Advanced endodontic therapy to save infected teeth. We use rotary instruments for precise and painless cleaning.',
      icon: Activity
    },
    {
      title: 'Teeth Whitening',
      desc: 'Professional bleaching procedures to remove stains and discoloration, giving you a dazzling white smile.',
      icon: Star
    },
    {
      title: 'Dental Implants',
      desc: 'State-of-the-art titanium implants that look, feel, and function like your natural teeth.',
      icon: ShieldCheck
    },
    {
      title: 'Braces & Aligners',
      desc: 'Orthodontic solutions including traditional metal braces, ceramic braces, and clear aligners (Invisalign).',
      icon: Heart
    },
    {
      title: 'Tooth Extraction',
      desc: 'Safe and painless removal of damaged or impacted teeth, including wisdom tooth surgeries.',
      icon: Scissors
    },
    {
      title: 'Pediatric Dentistry',
      desc: 'Specialized dental care for children, focusing on preventive care and habit counseling.',
      icon: Baby
    },
    {
      title: 'Gum Treatment',
      desc: 'Comprehensive periodontal care to treat gum diseases, scaling, and root planing.',
      icon: Smile
    },
    {
      title: 'General Consultation',
      desc: 'Routine check-ups, X-rays, and oral cancer screenings to maintain optimal oral hygiene.',
      icon: Stethoscope
    }
  ];

  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <div className="bg-slate-50 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive dental solutions tailored to your specific needs.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
              <button 
                onClick={onOpenModal}
                className="w-full py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Book Appointment
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
