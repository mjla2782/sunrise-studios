import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin, ChevronRight, Star, Quote, Send, Stethoscope, Activity, Heart, ShieldCheck, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local assets
import zahnHero from './assets/zahn-hero.png';
import drZahn from './assets/dr-zahn-placeholder.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-serif font-bold tracking-tighter transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
              ZAHN <span className="font-normal">CHIROPRACTIC</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About', 'Services', 'Gallery', 'Location'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-secondary-light'}`}
                >
                  {item}
                </a>
              ))}
              <a href="#appointment" className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg">
                BOOK APPOINTMENT
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Services', 'Gallery', 'Location'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                >
                  {item}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-primary font-bold"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={zahnHero}
          alt="Modern Chiropractic Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-secondary-light text-lg md:text-xl font-medium tracking-widest uppercase mb-4">Shreveport's Trusted Chiropractic Care</h2>
          <h1 className="text-4xl md:text-7xl font-serif text-white font-bold mb-6">Relieve Pain. <br />Restore Health.</h1>
          <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience advanced chiropractic treatments designed to help you live a pain-free, active life. Over 30 years of excellence in Shreveport.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl">
              OUR SERVICES
            </a>
            <a href="#appointment" className="border-2 border-white text-white hover:bg-white hover:text-primary-dark px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl">
              BOOK AN APPOINTMENT
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Meet Dr. Zahn</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900 leading-tight">Decades of Experience in Chiropractic Wellness</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed font-light">
              Dr. Robert L. Zahn, DC, has been a cornerstone of the Shreveport medical community for over 30 years. His patient-centered approach combines traditional chiropractic techniques with cutting-edge technology.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
              We specialize in non-surgical solutions for back pain, neck pain, and joint issues. Our goal is not just to mask symptoms, but to address the root cause of your discomfort and help you achieve optimal health.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="font-serif italic text-lg text-gray-800">Improving lives one spine at a time</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={drZahn}
              alt="Dr. Robert L. Zahn"
              className="rounded-lg shadow-2xl z-10 relative w-full"
            />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-light opacity-20 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary opacity-10 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { name: "Spinal Decompression", icon: <Activity />, desc: "Advanced non-surgical treatment for disc herniations and chronic back pain." },
    { name: "Mechanical Traction", icon: <Activity />, desc: "Gentle stretching of the spine to relieve pressure and improve mobility." },
    { name: "Electrical Muscle Stimulation", icon: <Activity />, desc: "Reduces inflammation and promotes muscle healing through therapeutic currents." },
    { name: "Shock Wave Therapy", icon: <Activity />, desc: "Fast-acting treatment for chronic tendonitis and musculoskeletal conditions." },
    { name: "Cold Laser Therapy", icon: <Activity />, desc: "Accelerates tissue repair and reduces pain using low-level laser light." },
    { name: "Massage Therapy", icon: <Activity />, desc: "Therapeutic massage to relieve tension, improve circulation, and aid recovery." }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Advanced Care Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-primary-light bg-opacity-10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">{service.name}</h4>
              <p className="text-gray-500 font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1629909608132-70df0f4deaab?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">The Practice</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Modern Facilities</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video overflow-hidden rounded-lg cursor-pointer"
            >
              <img src={img} alt="Medical facility" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "John S.", text: "After years of chronic back pain, Dr. Zahn was the only one who could provide lasting relief. Highly recommend!", stars: 5 },
    { name: "Mary D.", text: "The staff is professional and the treatments are effective. I'm finally back to my morning walks.", stars: 5 },
    { name: "Robert K.", text: "Dr. Zahn takes the time to explain everything. I felt very comfortable and seen throughout my treatment.", stars: 5 }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <Quote size={48} className="text-secondary-light opacity-50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(rev.stars)].map((_, i) => <Star key={i} size={16} className="fill-secondary-light text-secondary-light" />)}
              </div>
              <p className="text-xl font-serif italic mb-6">"{rev.text}"</p>
              <p className="text-secondary-light font-bold uppercase tracking-widest text-sm">— {rev.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  return (
    <section id="appointment" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Request an Appointment</h3>
          <p className="text-gray-500 mt-4 font-light">Start your journey to better health today. Fill out the form below and we'll contact you shortly.</p>
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-all" placeholder="(318) 555-0123" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@example.com" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Service</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-all">
              <option>Spinal Decompression</option>
              <option>Mechanical Traction</option>
              <option>Massage Therapy</option>
              <option>Other / Not Sure</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">How can we help? (Optional)</label>
            <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-all" rows={3}></textarea>
          </div>
          
          <button type="button" className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary-dark transition-all transform hover:translate-y-[-2px] shadow-lg flex items-center justify-center gap-2">
            REQUEST APPOINTMENT <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Visit Us</h2>
            <h3 className="text-3xl font-serif font-bold mb-8 text-gray-900 leading-tight">Hours & Location</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Address</h4>
                  <p className="text-gray-600 font-light">1005 Southland Park Dr<br />Shreveport, LA 71118</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Hours</h4>
                  <div className="text-gray-600 grid grid-cols-2 gap-x-8 font-light">
                    <span>Mon - Thu</span> <span>8:30 AM - 5:30 PM</span>
                    <span>Friday</span> <span>8:30 AM - 12:00 PM</span>
                    <span>Sat - Sun</span> <span>Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600 font-light">(318) 688-1221</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600 font-light">dzahn318@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-primary rounded-lg text-white">
              <h4 className="text-xl font-serif font-bold mb-2">Patient Resources</h4>
              <p className="mb-4 text-gray-200 font-light">New patients can download intake forms online to save time during their first visit.</p>
              <button className="bg-white text-primary px-6 py-2 rounded font-bold hover:bg-gray-100 transition-colors">DOWNLOAD FORMS</button>
            </div>
          </div>
          
          <div className="h-[400px] md:h-auto rounded-lg overflow-hidden shadow-xl border border-gray-100 bg-gray-100 flex items-center justify-center">
             <div className="text-center p-8">
               <MapPin size={48} className="text-primary mx-auto mb-4" />
               <p className="text-gray-600 font-serif italic text-lg">1005 Southland Park Dr, Shreveport, LA 71118</p>
               <a 
                 href="https://www.google.com/maps/search/Zahn+Chiropractic+Shreveport+LA" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="mt-4 inline-block text-primary font-bold underline hover:text-primary-dark"
               >
                 Get Directions
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold tracking-tighter mb-8">
          ZAHN <span className="font-normal text-secondary-light">CHIROPRACTIC</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm max-w-2xl mx-auto tracking-widest text-gray-300">
          <a href="#home" className="hover:text-white transition-colors">HOME</a>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
          <a href="#location" className="hover:text-white transition-colors">LOCATION</a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs tracking-wider">
          <p>&copy; 2026 Zahn Chiropractic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Appointment />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default App;
