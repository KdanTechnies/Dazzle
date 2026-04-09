import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  HeartPulse,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DazzleDental: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: "General Dentistry", desc: "Routine check-ups, cleaning, and preventative care for a lasting smile.", icon: <Stethoscope className="w-6 h-6" /> },
    { title: "Cosmetic Dentistry", desc: "Transform your look with professional whitening, veneers, and bonding.", icon: <Sparkles className="w-6 h-6" /> },
    { title: "Orthodontics", desc: "Expert teeth straightening using traditional braces or modern Invisalign.", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Dental Implants", desc: "Permanent, natural-looking solutions for missing teeth.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Crowns & Bridges", desc: "Restore damaged teeth with high-quality, durable porcelain work.", icon: <HeartPulse className="w-6 h-6" /> },
    { title: "Emergency Care", desc: "Immediate attention for dental pain or accidents when you need it most.", icon: <Phone className="w-6 h-6" /> },
  ];

  const testimonials = [
    { name: "Zaubee A.", text: "The staff are courteous and the service is impeccable. I will definitely return.", stars: 5 },
    { name: "Blessing O.", text: "Professional, friendly, and made me feel completely safe throughout my visit.", stars: 5 },
    { name: "Ibrahim K.", text: "Top-notch service from the front desk to the doctors. Highly recommended.", stars: 5 },
    { name: "Sarah J.", text: "They are gentle, thorough, and truly care about patient comfort.", stars: 5 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/2348124925066" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tight text-teal-700">
                DAZZLE<span className="text-slate-800">DENTAL</span>
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-slate-600 hover:text-teal-600 font-medium transition">About</a>
              <a href="#services" className="text-slate-600 hover:text-teal-600 font-medium transition">Services</a>
              <a href="#contact" className="text-slate-600 hover:text-teal-600 font-medium transition">Contact</a>
              <button className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition shadow-md">
                Book Appointment
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <a href="#about" className="block text-lg py-2" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#services" className="block text-lg py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#contact" className="block text-lg py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <button className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold">Book Appointment</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-white via-slate-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full mb-6">
                <Star className="w-4 h-4 fill-current text-yellow-500" />
                <span className="text-sm font-bold uppercase tracking-wider">Premium Dental Care in Abuja</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Creating Confident <span className="text-teal-600">Smiles</span> in Abuja
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Premium dental care with advanced technology and compassionate experts. Experience the gold standard of oral healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-teal-700 transition flex items-center justify-center shadow-lg hover:shadow-teal-200">
                  Book Appointment <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <a href="tel:+2348124925066" className="border-2 border-slate-200 bg-white text-slate-800 px-8 py-4 rounded-full text-lg font-bold hover:border-teal-600 transition flex items-center justify-center">
                  Call Now
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1629909606604-4a15116644ef?auto=format&fit=crop&q=80&w=800" 
                alt="Clinic" 
                className="relative rounded-3xl shadow-2xl z-10 w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-slate-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Dazzle Dental Clinic Ltd. Abuja, Nigeria.</p>
        </div>
      </footer>
    </div>
  );
};

export default DazzleDental;