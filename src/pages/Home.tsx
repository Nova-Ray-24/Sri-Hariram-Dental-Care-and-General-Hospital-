import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Heart, DollarSign, Activity, User, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onOpenModal: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home({ onOpenModal }: HomeProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
            alt="Dental Clinic"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left space-y-6"
          >
            <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
              #1 Dental Clinic in Chennai
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Your Smile, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Our Priority
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              Experience advanced dental care with compassion and precision. We combine modern technology with a gentle touch to give you the perfect smile.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all hover:-translate-y-1 text-center"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Element Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-sm ml-auto transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <Star fill="white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">5-Star Rated</h3>
                  <p className="text-sm text-gray-300">Over 2,000+ Happy Smiles</p>
                </div>
              </div>
              <p className="text-sm text-gray-200 italic">"The best dental experience I've ever had. Painless and professional!"</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Comprehensive Dental Services</h2>
            <p className="text-gray-600">We offer a wide range of treatments to ensure your dental health is in top condition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Root Canal', icon: Activity, desc: 'Save your natural teeth with our painless root canal treatments.' },
              { title: 'Teeth Whitening', icon: Star, desc: 'Get a brighter, whiter smile in just one session.' },
              { title: 'Dental Implants', icon: ShieldCheck, desc: 'Permanent solution for missing teeth with natural look.' },
              { title: 'Braces & Aligners', icon: Heart, desc: 'Straighten your teeth with invisible aligners or braces.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Dental Equipment"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Years Experience</p>
                    <p className="text-xs text-gray-500">Serving the community</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">We Are Committed To Your Oral Health</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Sri Hariram Dental Care, we prioritize your comfort and health above all else. Our state-of-the-art facility ensures you receive the best treatment possible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Experienced Doctors', icon: User, desc: 'Highly qualified specialists.' },
                  { title: 'Advanced Equipment', icon: Activity, desc: 'Latest dental technology.' },
                  { title: 'Pain-Free Procedures', icon: Heart, desc: 'Comfortable treatments.' },
                  { title: 'Affordable Pricing', icon: DollarSign, desc: 'Transparent costs.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">What Our Patients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', text: 'Best dental hospital in town. The doctors are very professional and caring.', rating: 5 },
              { name: 'Priya Sharma', text: 'Very clean clinic and painless treatment. Highly recommended!', rating: 5 },
              { name: 'Amit Verma', text: 'Affordable and trustworthy dental care. I am very happy with my implants.', rating: 5 },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Book your appointment today and take the first step towards better oral health.</p>
          <button
            onClick={onOpenModal}
            className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
