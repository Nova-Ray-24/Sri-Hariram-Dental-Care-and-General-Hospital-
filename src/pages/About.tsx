import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Smile, Calendar } from 'lucide-react';

export default function About() {
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
            About Us
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Learn more about our journey, our values, and the team dedicated to your smile.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
              alt="Clinic Interior" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Welcome to Sri Hariram Dental Care</h2>
            <p className="text-gray-600 leading-relaxed">
              Established in 2016, Sri Hariram Dental Care and General Hospital has been at the forefront of providing exceptional dental healthcare in Chennai. We believe that a healthy smile is the gateway to overall well-being.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our clinic is equipped with state-of-the-art technology to ensure precise diagnostics and effective treatments. From routine check-ups to complex surgical procedures, we handle every case with the utmost care and professionalism.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-blue-800 leading-relaxed">
              To provide accessible, affordable, and high-quality dental care to all sections of society, ensuring that every patient leaves our clinic with a confident and healthy smile.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as a leading center for dental excellence in India, known for our ethical practices, patient-centric approach, and commitment to innovation in dentistry.
            </p>
          </div>
        </div>

        {/* Doctor Profile */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 bg-gray-200 h-96 md:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Hariram" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 p-10 flex flex-col justify-center">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">Chief Dentist</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Dr. Hariram</h2>
              <p className="text-gray-500 font-medium mb-6">BDS, MDS - Conservative Dentistry & Endodontics</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With over 10 years of clinical experience, Dr. Hariram is a renowned specialist in root canal treatments and cosmetic dentistry. He is dedicated to staying updated with the latest advancements in dental science to provide the best possible care to his patients.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">10+ Years Experience</div>
                <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">5000+ Surgeries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Patients Treated', value: '15k+', icon: Users },
            { label: 'Years Experience', value: '10+', icon: Calendar },
            { label: 'Happy Smiles', value: '12k+', icon: Smile },
            { label: 'Awards Won', value: '8', icon: Award },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
