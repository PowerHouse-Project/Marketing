import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white p-6">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center py-4 px-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-bold">Powerhouse</h1>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center my-12"
      >
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-lg">
          <h2 className="text-3xl font-semibold">Introducing Our Product</h2>
          <motion.video
            whileHover={{ scale: 1.05 }}
            className="w-full h-64 mt-4 bg-gray-800 rounded-lg"
          />
        </div>
      </motion.section>

      {/* Product Description */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-12"
      >
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-lg">
          <p className="text-lg">Discover how our product can revolutionize energy savings and efficiency.</p>
        </div>
      </motion.section>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <Card className="bg-white/10 backdrop-blur-lg shadow-lg">
          <CardContent>
            <h3 className="text-xl font-semibold">Blog Articles</h3>
            <p>Explore the latest insights in energy efficiency.</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg shadow-lg">
          <CardContent>
            <h3 className="text-xl font-semibold">Energy Savings</h3>
            <p>Learn how our product helps cut down costs.</p>
          </CardContent>
        </Card>
      </div>

      {/* Newsletter Subscription */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-12"
      >
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
          <div className="flex mt-4">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="ml-2">Subscribe</Button>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-12 p-6 bg-white/10 backdrop-blur-lg rounded-xl text-center"
      >
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <p>Email: contact@powerhouse.com</p>
        <p>Phone: +1 234 567 890 (Tech Support)</p>
      </motion.footer>
    </div>
  );
}