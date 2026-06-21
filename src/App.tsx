import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin, ChevronRight, Star, Quote, Send, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
            <h1 className={`text-2xl font-serif font-bold tracking-tighter transition-colors ${isScrolled ? 'text-burgundy' : 'text-white'}`}>
              GIBBONS <span className="font-normal">FINE GRILL</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About', 'Menu', 'Gallery', 'Location'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-burgundy' : 'text-white hover:text-gold-light'}`}
                >
                  {item}
                </a>
              ))}
              <a href="#reservations" className="bg-burgundy text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-burgundy-dark transition-colors shadow-lg">
                RESERVATIONS
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
              {['Home', 'About', 'Menu', 'Gallery', 'Location'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-burgundy hover:bg-gray-50"
                >
                  {item}
                </a>
              ))}
              <a
                href="#reservations"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-burgundy font-bold"
              >
                RESERVATIONS
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
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600"
          alt="Fine Dining"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold-light text-lg md:text-xl font-medium tracking-widest uppercase mb-4">Welcome to Shreveport's Premier Dining</h2>
          <h1 className="text-4xl md:text-7xl font-serif text-white font-bold mb-6">Elevated Cuisine. <br />Elegant Atmosphere.</h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the art of fine dining with meticulously crafted dishes and an ambiance that whispers luxury.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#menu" className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl">
              EXPLORE MENU
            </a>
            <a href="#reservations" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl">
              BOOK A TABLE
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
            <h2 className="text-burgundy text-sm font-bold tracking-widest uppercase mb-4">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900 leading-tight">A Tradition of Culinary Excellence in Shreveport</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed font-light">
              For years, Gibbons Fine Grill has been the cornerstone of upscale dining in Shreveport, Louisiana. Our commitment to using the freshest ingredients, sourced locally whenever possible, sets us apart.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
              Whether you're celebrating a milestone or seeking a sophisticated evening out, our team is dedicated to providing an unforgettable experience. From our hand-cut steaks to our delicate seafood, every dish is a masterpiece.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-burgundy"></div>
              <span className="font-serif italic text-lg text-gray-800">Mastering the Art of the Grill</span>
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
              src="https://images.unsplash.com/photo-1550966842-2862ba996344?auto=format&fit=crop&q=80&w=800"
              alt="Restaurant Atmosphere"
              className="rounded-lg shadow-2xl z-10 relative"
            />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-light opacity-20 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-burgundy opacity-10 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const menuItems = {
    Appetizers: [
      { name: "Crispy Calamari", price: "$12.95", desc: "Served with zesty marinara and fresh lemon" },
      { name: "Spinach Artichoke Dip", price: "$10.95", desc: "Warm and creamy, served with toasted crostini" },
      { name: "Shrimp Cocktail", price: "$14.95", desc: "Chilled jumbo shrimp with signature cocktail sauce" },
      { name: "Seared Ahi Tuna", price: "$15.95", desc: "Sesame crusted with wasabi and ginger soy" }
    ],
    "Main Courses": [
      { name: "8oz. Center Cut Filet", price: "$24.95", desc: "The most tender cut, grilled to perfection" },
      { name: "Steak & Shrimp", price: "$19.95", desc: "Sirloin paired with grilled or fried jumbo shrimp" },
      { name: "Mahi Mahi Alexander", price: "$17.95", desc: "Topped with sautéed shrimp and wine sauce" },
      { name: "Cedar Planked Salmon", price: "$16.95", desc: "Fresh Atlantic salmon roasted on cedar" },
      { name: "Baby Back Ribs", price: "$16.95", desc: "Slow-smoked and basted in signature BBQ sauce" }
    ],
    Desserts: [
      { name: "Homemade Key Lime Pie", price: "$6.95", desc: "Refreshing and tart with a buttery crust" },
      { name: "Fudge Brownie Sundae", price: "$6.95", desc: "Warm brownie topped with vanilla bean ice cream" }
    ]
  };

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-burgundy text-sm font-bold tracking-widest uppercase mb-4">Our Menu</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">A Symphony of Flavors</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(menuItems).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-2xl font-serif font-bold mb-8 border-b border-gold-light pb-2 text-burgundy">{category}</h4>
              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h5 className="text-lg font-bold text-gray-800 group-hover:text-gold transition-colors">{item.name}</h5>
                      <span className="text-burgundy font-medium ml-4">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm italic font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a href="#" className="inline-flex items-center text-burgundy font-bold hover:text-burgundy-dark group tracking-wider text-sm">
            VIEW FULL MENU <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1550966842-2862ba996344?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-burgundy text-sm font-bold tracking-widest uppercase mb-4">Gallery</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Sights of Gibbons</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img src={img} alt="Restaurant dish or interior" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "James R.", text: "The best steak I've had in Shreveport. The atmosphere is just right—sophisticated but comfortable.", stars: 5 },
    { name: "Sarah L.", text: "Gibbons is our go-to for anniversaries. The salmon is divine and the service is always impeccable.", stars: 5 },
    { name: "Michael T.", text: "A hidden gem. Everything from the appetizers to the key lime pie was outstanding.", stars: 5 }
  ];

  return (
    <section className="py-24 bg-burgundy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <Quote size={48} className="text-gold opacity-50" />
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
                {[...Array(rev.stars)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
              </div>
              <p className="text-xl font-serif italic mb-6">"{rev.text}"</p>
              <p className="text-gold font-bold uppercase tracking-widest text-sm">— {rev.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reservations = () => {
  return (
    <section id="reservations" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-burgundy text-sm font-bold tracking-widest uppercase mb-4">Reservations</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Book Your Table</h3>
          <p className="text-gray-500 mt-4 font-light">Join us for an unforgettable dining experience. Reservations are recommended.</p>
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-burgundy focus:border-burgundy outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-burgundy focus:border-burgundy outline-none transition-all" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-burgundy focus:border-burgundy outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-burgundy focus:border-burgundy outline-none transition-all">
                <option>6:00 PM</option>
                <option>6:30 PM</option>
                <option>7:00 PM</option>
                <option>7:30 PM</option>
                <option>8:00 PM</option>
                <option>8:30 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-burgundy focus:border-burgundy outline-none transition-all">
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
            <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-burgundy focus:border-burgundy outline-none transition-all" rows={3}></textarea>
          </div>
          
          <button type="button" className="w-full bg-burgundy text-white py-4 rounded-lg font-bold hover:bg-burgundy-dark transition-all transform hover:translate-y-[-2px] shadow-lg flex items-center justify-center gap-2">
            CONFIRM RESERVATION <Send size={18} />
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
            <h2 className="text-burgundy text-sm font-bold tracking-widest uppercase mb-4">Visit Us</h2>
            <h3 className="text-3xl font-serif font-bold mb-8 text-gray-900 leading-tight">Hours & Location</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Address</h4>
                  <p className="text-gray-600 font-light">1714 E 70th St<br />Shreveport, LA 71105</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Hours</h4>
                  <div className="text-gray-600 grid grid-cols-2 gap-x-8 font-light">
                    <span>Tue - Sun</span> <span>11:00 AM - 9:00 PM</span>
                    <span className="font-medium text-burgundy">Wednesday</span> <span className="font-medium text-burgundy">1:00 PM - 9:00 PM</span>
                    <span>Monday</span> <span>Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600 font-light">(318) 848-7071</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-burgundy rounded-lg text-white">
              <h4 className="text-xl font-serif font-bold mb-2">Private Events</h4>
              <p className="mb-4 text-gray-200 font-light">Host your next special occasion with us. We offer customized menus and an elegant private dining room.</p>
              <button className="bg-white text-burgundy px-6 py-2 rounded font-bold hover:bg-gray-100 transition-colors">INQUIRE NOW</button>
            </div>
          </div>
          
          <div className="h-[400px] md:h-auto rounded-lg overflow-hidden shadow-xl border border-gray-100 bg-gray-100 flex items-center justify-center">
             <div className="text-center p-8">
               <MapPin size={48} className="text-burgundy mx-auto mb-4" />
               <p className="text-gray-600 font-serif italic text-lg">1714 E 70th St, Shreveport, LA 71105</p>
               <a 
                 href="https://www.google.com/maps/search/Gibbons+Fine+Grill+Shreveport+LA" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="mt-4 inline-block text-burgundy font-bold underline hover:text-burgundy-dark"
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
          GIBBONS <span className="font-normal text-gold-light">FINE GRILL</span>
        </h2>
        
        <div className="flex justify-center space-x-6 mb-10 text-gray-400">
          <a href="#" className="hover:text-gold transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-gold transition-colors"><Facebook size={24} /></a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm max-w-2xl mx-auto tracking-widest text-gray-300">
          <a href="#home" className="hover:text-white transition-colors">HOME</a>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#menu" className="hover:text-white transition-colors">MENU</a>
          <a href="#location" className="hover:text-white transition-colors">LOCATION</a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs tracking-wider">
          <p>&copy; 2026 Gibbons Fine Grill. All rights reserved.</p>
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
      <MenuSection />
      <Gallery />
      <Testimonials />
      <Reservations />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default App;
