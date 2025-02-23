import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HomePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const parallax1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const parallax2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <div ref={ref} className="relative bg-black text-white min-h-screen overflow-hidden font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 fixed w-full backdrop-blur-md bg-black/50 z-50">
        <h1 className="text-2xl font-bold text-blue-400">POWERHOUSE</h1>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About us</li>
            <li className="border border-blue-400 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-400 hover:text-black">Contact Us</li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <motion.div style={{ y: parallax1 }} className="absolute top-20 left-10 w-40 h-40 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl"></motion.div>
      <motion.div style={{ y: parallax2 }} className="absolute top-40 right-10 w-40 h-40 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl"></motion.div>
      
      <section className="flex flex-col items-center text-center pt-40 pb-20">
        <h2 className="text-5xl font-bold text-blue-400">See It in Action</h2>
        <p className="text-gray-300 mt-4 max-w-2xl">Watch our demo video to experience the product firsthand and see how it simplifies energy tracking and automation.</p>
        <div className="mt-10 w-3/4 h-72 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl"></div>
      </section>
      
      {/* Story Section */}
      <section className="p-20 text-center">
        <h2 className="text-3xl font-bold text-blue-400">DISCOVER OUR STORY</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          POWERHOUSE is a smart home platform designed to help you track, automate, and reduce energy consumption effortlessly. With real-time monitoring, smart automation, and cost-saving insights, POWERHOUSE optimizes your home’s energy use—saving you money while reducing your carbon footprint.
          No complicated setups or extra hardware required—just an intuitive app and website that put you in control of your energy usage. Whether you're at home or on the go, POWERHOUSE makes smart energy management simple and efficient.
        </p>
      </section>
      
      {/* Features Section */}
      <section className="p-20 text-center">
        <h2 className="text-3xl font-bold text-blue-400">KEY FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {['Real-time Tracking', 'User-Friendly', 'Cost-Saving', 'Smart Automation'].map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl"
            >
              <h3 className="text-xl font-bold">{feature}</h3>
              <p className="text-gray-300 mt-2">We achieve our goals and consistently deliver with confidence.</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Blogs Section */}
      <section className="p-20 text-center">
        <h2 className="text-3xl font-bold text-blue-400">Blogs and Resources</h2>
        <p className="text-gray-300 mt-4">Stay informed with the latest tips, trends, and insights on smart home energy savings.</p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          <div className="w-1/3 h-40 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl"></div>
          <div className="w-1/4 h-40 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl"></div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="p-20 text-center">
        <h2 className="text-3xl font-bold text-blue-400">Join Our Newsletter</h2>
        <p className="text-gray-300 mt-4">Stay updated with our latest offers and news.</p>
        <div className="mt-4 flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-3 rounded-l-md w-1/3 bg-gray-800 text-white border border-gray-600" />
          <button className="p-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Subscribe</button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="p-10 text-center border-t border-gray-700">
        <h3 className="text-xl font-bold text-blue-400">Customer Support</h3>
        <p className="text-gray-300">We are here to assist you with any queries or concerns.</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Chat with Us</button>
      </footer>
    </div>
  );
}