import React, { useState } from 'react';
import { 
  Phone, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  HeartPulse,
  MessageCircle,
  MapPin, // Now used
  Clock,  // Now used
  Calendar // Now used
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DazzleDental: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: "General Dentistry", desc: "Routine check-ups, cleaning, and preventative care.", icon: <Stethoscope className="w-6 h-6" /> },
    { title: "Cosmetic Dentistry", desc: "Transform your look with whitening and veneers.", icon: <Sparkles className="w-6 h-6" /> },
    { title: "Orthodontics", desc: "Teeth straightening using modern Invisalign.", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Dental Implants", desc: "Permanent solutions for missing teeth.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Crowns & Bridges", desc: "Restore damaged teeth with durable work.", icon: <HeartPulse className="w-6 h-6" /> },
    { title: "Emergency Care", desc: "Immediate attention for dental pain.", icon: <Phone className="w-6 h-6" /> },
  ];

  const testimonials = [
    { name: "Zaubee A.", text: "The staff are courteous and the service is impeccable.", stars: 5 },
    { name: "Blessing O.", text: "Professional, friendly, and made me feel safe.", stars: 5 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <a href="https://wa.me/2348124925066" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"><MessageCircle className="w-6 h-6" /></a>

      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <span className="text-2xl font-bold text-teal-700">DAZZLE<span className="text-slate-800">DENTAL</span></span>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="hover:text-teal-600 transition">Services</a>
            <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full font-bold">Book Now</button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Creating Confident <span className="text-teal-600">Smiles</span> in Abuja</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">Premium dental care with advanced technology and compassionate experts.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center">Book Appointment <ChevronRight className="ml-2 w-5 h-5" /></button>
              <a href="tel:+2348124925066" className="border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg">Call Now</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center mb-6">{s.icon}</div>
              <h4 className="text-xl font-bold mb-2">{s.title}</h4>
              <p className="text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - USES 'testimonials' and 'Star' */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex justify-center text-yellow-500 mb-4">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic mb-4">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - USES 'MapPin', 'Clock', 'Calendar' */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto border rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
            <div className="space-y-6">
              <div className="flex gap-4"><MapPin className="text-teal-600" /> <p>Plot 215 Konoko Crescent, Wuse 2, Abuja</p></div>
              <div className="flex gap-4"><Clock className="text-teal-600" /> <p>Mon–Fri: 9am–6pm, Sat: 9am–3pm</p></div>
              <div className="flex gap-4"><Calendar className="text-teal-600" /> <p>Open for emergency bookings 24/7</p></div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl min-h-[200px] flex items-center justify-center text-slate-400 font-medium">Map View</div>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 text-white text-center">
        <p>© {new Date().getFullYear()} Dazzle Dental Clinic Ltd.</p>
      </footer>
    </div>
  );
};

export default DazzleDental;